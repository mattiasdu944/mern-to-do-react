import React from 'react'
import Task from './Task'
import { Text } from '@chakra-ui/react';
import styled from 'styled-components';

const TaskContainer = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    
`
 

const ListTask = ({tasks, setTasks}) => {
  return (
    <>
      <Text fontSize={{base:"1.5rem", md:"2rem"}} fontWeight="600">
        List of your tasks
      </Text>

      <TaskContainer>
        {tasks.map((task,index) => 
          <Task 
          key={index} 
          task={task}
          />
        )}
      </TaskContainer>
    </>
  )
}

export default ListTask