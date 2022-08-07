import { Text } from '@chakra-ui/react'
import React from 'react'
const Home = () => {
  return (
    <section>
      <Text fontSize={{base:"3rem", sm:"4rem", md:"4.5rem"}} fontWeight="600">
        Welcome Back!
      </Text>
      <Text fontSize={{base:"1rem", sm:"1.25rem"}} color='#6366f1' >
        See the latest updates 
      </Text>
    </section>

  )
}

export default Home