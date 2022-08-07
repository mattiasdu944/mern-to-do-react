import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
} from '@chakra-ui/react'

const ModalButton = ({children, title, body, onFunctionPress}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} bgColor="#6366f1" my={3} _hover={{ bg: '#5456f3' }}>{children}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="#161616">
          <ModalHeader color="#fff">{title}</ModalHeader>
          <ModalCloseButton color="#fff"/>
          <ModalBody>
            {body}
          </ModalBody>


        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalButton