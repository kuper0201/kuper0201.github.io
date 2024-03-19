import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage as Img, getImage } from 'gatsby-plugin-image'
import { Box, Text, Card, Flex, Button } from 'theme-ui'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Section from '@components/Section'
import Seo from '@widgets/Seo'

const styles = {
  imageWrapper: {
    borderRadius: `default`,
    overflow: `hidden`,
    position: `relative`
  },
  button: {
    display: [`none`, `block`],
    position: `absolute`,
    bottom: 4,
    right: 4
  },
  grid: {
    flexWrap: [`wrap`, null, `nowrap`],
    ' > div + div': {
      ml: [0, 0, 5]
    }
  },
  column: {
    flex: `auto`,
    flexBasis: [`full`, null, `1/2`]
  }
}

export default props => {
  const data = useStaticQuery(aboutQuery)
  const image = getImage(data.avatar)

  return (
    <Layout {...props}>
      <Seo title='About' />
      <Divider />
      <Stack>
        <Main>
          <PageTitle
            header='About Me'
            subheader='컴퓨터 공학을 전공하고 있는 학생입니다.'
          />
          <Flex sx={styles.grid}>
            <Box sx={styles.column}>
              <Section title='My Story'>
                <Card variant='paper'>
                  <Text variant='p'>
                    테스트 내용 1입니다.
                  </Text>
                  <Text variant='p'>
                    테스트 내용 2입니다.
                  </Text>
                </Card>
              </Section>
              <Divider/>
              <Section title='Projects'>
                <Card variant='paper'>
                  <Text variant='p'>
                    프로젝트 링크
                  </Text>
                </Card>
              </Section>
              <Divider/>
            </Box>
            <Box sx={styles.column}>
              <Section title='Skills'>
                <Card variant='paper'>
                  <a href="https://java.com/ko/"><img src="https://img.shields.io/badge/Java-red?style=for-the-badge&amp;logo=openjdk&amp;logoColor=white"/></a> &nbsp;
                  <a href="https://isocpp.org/"><img src="https://img.shields.io/badge/-c++-00599C?style=for-the-badge&amp;logo=cplusplus&logoColor=white"/></a> &nbsp;
                  <a href="https://www.python.org/"><img src="https://img.shields.io/badge/Python-green?style=for-the-badge&amp;logo=Python&amp;logoColor=white"/></a> &nbsp;
                  <a href="https://www.docker.com/"><img src="https://img.shields.io/badge/-Docker-blue?style=for-the-badge&amp;logo=Docker&logoColor=white"/></a> &nbsp;
                  <a href="https://www.jetbrains.com/"><img src="https://img.shields.io/badge/-intellij-orange?style=for-the-badge&amp;logo=Intellij IDEA&logoColor=white"/></a> &nbsp;
                  <a href="https://github.com/"><img src="https://img.shields.io/badge/-GitHub-121418?style=for-the-badge&amp;logo=GitHub&logoColor=white"/></a> &nbsp;
                  <a href="https://archlinux.org/"><img src="https://img.shields.io/badge/-Arch Linux-blue?style=for-the-badge&amp;logo=Arch Linux&logoColor=white"/></a>
                </Card>
              </Section>
              <Divider/>
              <Section title='백준 알고리즘(BOJ)'>
                <Card variant='paper'>
                  <a href='https://solved.ac/kuper0201'>
                    <img style={{display: 'block', width: '100%', height: 'auto'}} src="http://mazassumnida.wtf/api/v2/generate_badge?boj=kuper0201"/>
                  </a>
                </Card>
              </Section>
              <Divider/>
              <Section title='코드포스(CodeForces)'>
                <Card variant='paper'>
                  <a href='https://codeforces.com/profile/kuper0201'>
                    <img style={{display: 'block', width: '100%', height: 'auto'}} src='https://cf.leed.at?id=kuper0201'/>
                  </a>
                </Card>
              </Section>
            </Box>
          </Flex>
        </Main>
      </Stack>
    </Layout>
    )
}

const aboutQuery = graphql `
query AboutQueryShadowing {
  avatar: file(absolutePath: { regex: "/about.(jpeg|jpg|gif|png)/" }) {
    childImageSharp {
      gatsbyImageData(
      width: 1140 height: 500
      transformOptions: { cropFocus: NORTH }
      )
    }
  }
}
`