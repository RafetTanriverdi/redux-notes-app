import React, { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import ModalComponent from "./ModalComponent";
import { onClickNote } from "../Redux/note/noteSlice";

function List() {
  const [isOpen, setIsOpen] = useState(false);
  const notes = useSelector((state) => state.notes.notes);
  const filtered = useSelector((state) => state.notes.filtered);
  const dispatch = useDispatch();
  const filteredNotes = notes.filter((item) =>
    item.note.toLowerCase().includes(filtered.toLowerCase())
  );
  const handelClick = (item) => {
    dispatch(onClickNote(item));
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        flexDirection="row"
        pt="1"
      >
        {filteredNotes.map((item) => (
          <Box
            key={item.id}
            m="1"
            p="1"
            bg={item.color}
           
            borderRadius="16"
            rounded="xl"
            boxShadow="xl"
            overflow="hidden"
            textOverflow="ellipsis"
            onClick={() => handelClick(item)}
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Text
           
              color={item.color === "blue" ? "white" : "gray.700"}
              textShadow="0 0 1px #4A5568"
              p={1}
              height={180}
              width={210}
            >
              {item.note}
            </Text>
          </Box>
        ))}
      </Box>
      {isOpen && <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}

export default List;
