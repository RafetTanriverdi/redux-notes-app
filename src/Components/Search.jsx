import React from 'react'
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../Redux/note/noteSlice';

function Search() {
  const filtered = useSelector((state) => state.filtered);
  const dispatch = useDispatch();
  return (
    <div>
      <Box textAlign="center">
        <Text
          fontSize="6xl"
          fontWeight="600"
          color="black"
          p="3"
        >
          Notes App
        </Text>

      </Box>

      <Box zIndex="1" bg="white" rounded="xl">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />} 
            />
          <Input value={filtered} type="text"
            placeholder='Note Search'
            border="0"
            focusBorderColor="none"
            fontWeight="300"
            spellCheck="false"
            onChange={(e) => dispatch(search(e.target.value))}
          />
        </InputGroup>
      </Box>
    </div>
  )
}

export default Search