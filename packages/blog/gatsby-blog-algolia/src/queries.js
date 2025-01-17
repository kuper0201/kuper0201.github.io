const postQuery = `{
  posts: allArticle(
    filter: {
      private: {ne: true}
      draft: {ne: true}
    }
  ) {
    edges {
      node {
        objectID: id
        title
        slug
//        link
        excerpt(pruneLength: 5000)
        category {
          name
          slug
        }
      }
    }
  }
}`;

// 공백 압축 함수
const normalizeWhitespace = (text) => text.replace(/\s+/g, ' ').trim();

const flatten = (arr) =>
  arr.map(({ node: { ...rest } }) => ({
    ...rest,
    // 공백 압축 처리
    title: rest.title ? normalizeWhitespace(rest.title) : '',
    excerpt: rest.excerpt ? normalizeWhitespace(rest.excerpt) : '',
  }));

const settings = {
  attributesToSnippet: ['excerpt:20'],
  attributeForDistinct: 'category.name',
};

const queries = [
  {
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME || 'Posts',
    query: postQuery,
    settings,
    transformer: ({ data }) => flatten(data.posts.edges),
  },
];

module.exports = queries;