require('dotenv').config()

module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        chunkSize: 10000,
        queries: require('@elegantstack/gatsby-blog-algolia/src/queries')
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'kuper0201 블로그',
        short_name: 'kuper0201 블로그',
        description: 'kuper0201의 개발 블로그입니다.',
        start_url: '/',
        icon: 'content/assets/favicon.svg',
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#f8f8f8',
        lang: 'ko',
        orientation: 'any'
      }
    },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-personal',
      options: {
        services: {
          algolia: true
        },
        siteUrl: 'https://jeong-jun.su'
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
	remarkPlugins: [require("remark-math")],
	rehypePlugins: [require("rehype-katex")],
	gatsbyRemarkPlugins: [
	  {
	    resolve: "gatsby-remark-images",
  	    options: {
	      showCaptions: true
            }
          },
	  {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              elements: ["h2"]
            }
          }
	]
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'kuper0201',
    name: 'kuper0201',
    lang: 'ko',
    description: 'kuper0201의 개발 블로그입니다.',
    address: 'Republic of Korea',
    email: 'kuper171@gmail.com',
    phone: '+82 (888) 888-8888',

    //Site Social Media Links
    social: [
      {
        name: 'Github',
        url: 'https://github.com/kuper0201'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      },
      {
        name: 'About Me',
        slug: '/about'
      }
    ],
      
    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Home',
            slug: '/'
          },
          {
            name: 'About Me',
            slug: '/about'
          }
        ]
     },
     {
        title: 'Topics',
        items: [
          {
            name: 'Algorithm',
            slug: '/category/algorithm/'
          },
          {
            name: 'Projects',
            slug: '/category/projects/'
          }
        ]
      },
      {
        title: 'Tags',
        items: [
          {
            name: '#algorithm',
            slug: '/tag/algorithm/'
          },
          {
            name: '#projects',
            slug: '/tag/projects/'
          },
        ]
      }
    ]
  }
}
