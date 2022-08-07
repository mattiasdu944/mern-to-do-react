import { useState } from 'react';
import { FormControl, FormLabel, Input, InputGroup, Textarea, Button, useToast, Box } from '@chakra-ui/react'

const FormTask = () => {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const toast = useToast()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enviando')
        
        if(title.trim() === '') {
            toast({
                title: 'Add a title.',
                status: 'error',
                duration: 4000,
                isClosable: true,
                position: 'top-right',
            })
            return;
        }
        
        toast({
            title: 'Task added successfully.',
            status: 'success',
            duration: 4000,
            isClosable: true,
            position: 'top-right',
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <InputGroup display="grid">
                    <FormLabel color="#ddd" htmlFor="name">Title</FormLabel>
                    <Input color="#ddd" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
                </InputGroup>
                <InputGroup display="grid" mt={5}>
                    <FormLabel color="#ddd" htmlFor="name">Description</FormLabel>
                    <Textarea color="#ddd" placeholder='Add a description(optional)' value={description} onChange={e => setDescription(e.target.value)} />
                </InputGroup>

                <Button mt={5} color="#fff" type='submit' bgColor="#6366f1" _hover={{ bg: '#5456f3' }} >Save</Button>

            </FormControl>
        </form>
    )
}

export default FormTask