import React from 'react'
import { Link } from 'gatsby'
import { Button, Box, Heading, Text } from 'theme-ui'

/**
 * Shadow me to add your own content
 */

const styles = {
  author: {
    display: `inline-block`,
    color: `alpha`
  },
  occupation: {
    mb: 4
  },
  specialty: {
    color: `text`,
    mb: 4
  }
}

export default () => (
  <>
    <Heading variant='h1'>
      안녕하세요!
    </Heading>
    <Heading variant='h1' sx={styles.occupation}>
        <Text sx={styles.author}>kuper0201</Text>의
    </Heading>
    <Heading variant='h3' sx={styles.specialty}>
       개발 블로그입니다.
    </Heading>
    <Box variant='buttons.group'>
      <Button variant='white' as={Link} to='/about'>
        About Me
      </Button>
    </Box>
  </>
)
