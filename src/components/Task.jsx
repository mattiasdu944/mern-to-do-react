import React from 'react'
import { Text } from '@chakra-ui/react';
import styled from 'styled-components';

const TaskItem = styled.div`
    display: grid;
    cursor: pointer;
    background-color: #6366f1;
    padding:1rem 2rem;
    border-radius: .5rem;
    min-height: 25vh;
    &:hover {
        box-shadow: #494cd1 0px 0px 30px;
        transition: all .3s ease-in-out;
    }
`


const Task = ({task}) => {
    const { title, description, categoria } = task;
  return (
    <>
        <TaskItem>
            <Text fontSize={{base:".85rem", md:"1rem"}} fontWeight="600">
                {categoria}
            </Text>
            <Text fontSize={{base:"1.5rem", md:"2rem"}} fontWeight="500">
                {title}
            </Text>
            <Text fontSize={{base:"1rem", md:"1.25rem"}} p="0" m="0">
                {description}
            </Text>
        </TaskItem>
    </>
  )
}

export default Task