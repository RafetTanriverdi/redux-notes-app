import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { edit } from "../Redux/note/noteSlice";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button, Textarea, useToast
} from '@chakra-ui/react'

function ModalComponent({ setIsOpen, isOpen }) {
    const toast = useToast();
    const dispatch = useDispatch();
    const item = useSelector((state) => state.notes.currentNote);
    const [editNote, setEditNote] = useState(item.note);

    const saveSubmit = () => {
        dispatch(edit(editNote));
        setIsOpen(!isOpen);
        toast({
            description: "Note saved.",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
    };

    const onClose = () => {
        setIsOpen(false)
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody>

                    <Textarea
                        value={editNote}
                        onChange={(e) => setEditNote(e.target.value)}
                        fontWeight="300"
                        w="100%"
                        h="160px"
                        placeholder="Enter your note here"
                        resize="none"
                        focusBorderColor="none"
                        spellCheck="false"
                    />



                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant='ghost'  type='submit' onClick={saveSubmit}>Save</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalComponent