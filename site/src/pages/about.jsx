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
            subheader='안녕하세요!'
          />
          <Flex sx={styles.grid}>
            <Box sx={styles.column}>
              <Section title='My Story'>
                <Card variant='paper'>
                  <b>안녕하세요! 저는 컴퓨터 공학 전공자로서 머신러닝과 크로스플랫폼 개발에 많은 관심을 가지고 있습니다. 최근에는 Flutter와 생성형 AI에 대해 공부하고 있습니다. 저의 목표는 제가 습득한 기술들을 융합하여 혁신적인 솔루션을 창조하는 것입니다.</b>
                </Card>
              </Section>
              <Divider/>
              <Section title='Projects'>
                <Card variant='paper'>
                  <table>
                    <tr align="center">
                      <th>Project</th>
                      <th>Description</th>
                    </tr>
                    <tr align="center">
                      <td><a style={{color:"#667eea"}} href="https://github.com/kuper0201/NVMon">NVMon</a></td>
                      <td>NVIDIA GPU의 상태를 모니터링하기 위한 오버레이 도구</td>
                    </tr>
                    <tr align="center">
                      <td><a style={{color:"#667eea"}} href="https://github.com/kuper0201/LSGAN_Bird">LSGAN Bird</a></td>
                      <td>GAN을 이용해 조류 이미지를 생성하기 위한 프로젝트</td>
                    </tr>
                    <tr align="center">
                      <td><a style={{color:"#667eea"}} href="https://github.com/kuper0201/FileCrypto_Flutter">File Crypto</a></td>
                      <td>ChaCha20을 이용해 파일을 암호화/복호화 할 수 있는 크로스플랫폼 앱</td>
                    </tr>
                    <tr align="center">
                      <td><a style={{color:"#667eea"}} href="https://github.com/kuper0201/Piano_Transcription">Piano Transcription</a></td>
                      <td>피아노 연주를 MIDI 파일로 변환하기 위한 머신러닝 프로젝트</td>
                    </tr>
                    <tr align="center">
                      <td><a style={{color:"#667eea"}} href="https://github.com/kuper0201/AutoSort_Android">AutoSort</a></td>
                      <td>저장공간의 파일을 확장자별로 분류하기 위한 안드로이드 앱</td>
                    </tr>
                  </table>
                </Card>
              </Section>
            </Box>
            <Box sx={styles.column}>
              <Section title='Skills'>
                <Card variant='paper'>
                  <a href="https://java.com/ko/"><img alt="Java" src="https://img.shields.io/badge/Java-E89844?style=for-the-badge&amp;logo=openjdk&amp;logoColor=white"/></a> &nbsp;
                  <a href="https://isocpp.org/"><img alt="C/C++" src="https://img.shields.io/badge/-c++-00599C?style=for-the-badge&amp;logo=cplusplus&logoColor=white"/></a> &nbsp;
                  <a href="https://www.python.org/"><img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&amp;logo=Python&amp;logoColor=white"/></a> &nbsp;
                  <a href="https://www.android.com/"><img alt="Android" src="https://img.shields.io/badge/Android-34A853?style=for-the-badge&logo=Android&logoColor=white"/></a> &nbsp;
                  <a href="https://www.tensorflow.org/"><img alt="Tensorflow" src="https://img.shields.io/badge/Tensorflow-FF6F00?style=for-the-badge&logo=Tensorflow&logoColor=white"/></a> &nbsp;
                  <a href="https://pytorch.org/"><img alt="PyTorch" src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=PyTorch&logoColor=white"/></a> &nbsp;
                  <a href="https://www.docker.com/"><img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&amp;logo=Docker&logoColor=white"/></a> &nbsp;
                  <a href="https://www.jetbrains.com/"><img alt="Intellij IDEA" src="https://img.shields.io/badge/-intellij-orange?style=for-the-badge&amp;logo=Intellij IDEA&logoColor=white"/></a> &nbsp;
                  <a href="https://github.com/"><img alt="GitHub" src="https://img.shields.io/badge/-GitHub-121418?style=for-the-badge&amp;logo=GitHub&logoColor=white"/></a> &nbsp;
                  <a href="https://archlinux.org/"><img alt="ArchLinux" src="https://img.shields.io/badge/-Arch Linux-blue?style=for-the-badge&amp;logo=Arch Linux&logoColor=white"/></a>
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