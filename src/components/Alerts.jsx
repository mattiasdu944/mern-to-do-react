import React from 'react'
import { FormControl, FormLabel, Input, InputGroup, Textarea, Button, useToast, Box } from '@chakra-ui/react'

export const Alerts = () => {
    const toast = useToast();
    return (
        toast({
            title: 'Task added successfully.',
            status: 'success',
            duration: 4000,
            isClosable: true,
        })
    )
}
