import { ChakraProvider, Container } from '@chakra-ui/react'
import React from 'react'
import List from './List'
import NoteAdd from './NoteAdd'
import Search from './Search'

function Content() {
  return (
      <ChakraProvider>
        <Container
          maxWidth={1000}
          mt={5}
          rowGap={25}
          shadow="md"
          p={35}
          my="auto"
          justifyContent={"space-between"}
          style={{backgroundColor:"#F1F1F2"}}
          >

          <Search />
          <NoteAdd />
          <List />
        </Container>
      </ChakraProvider>
  )
}

export default Content