import {useEffect, useState} from 'react'
import { Text } from '@chakra-ui/react'
import ModalButton from '../components/ModalButton'
import FormTask from '../components/FormTask'
import ListTask from '../components/ListTask'


const Tareas = () => {
  
  const [tasks, setTasks] = useState([
    {
      title: 'Tarea 1',
      description: 'Descripción de la tarea 1',
      categoria: 'Categoria 1',
    },
    {
      title: 'Tarea 2',
      description: 'Descripción de la tarea 2',
      categoria: 'Categoria 2',
    },
    {
      title: 'Tarea 3',
      description: 'Descripción de la tarea 3',
      categoria: 'Categoria 2',
    }
  ])

  
  
  return (
    <section>
      <Text fontSize={{base:"3rem", sm:"3.5rem", md:"4.5rem"}} fontWeight="600">
        Organize your tasks
      </Text>
      <Text fontSize={{base:"1rem", sm:"1.25rem"}} color='#6366f1' >
        Add and monitor your tasks
      </Text>

      <ModalButton
        title='Add Task'
        body={<FormTask/>}
      >
        Add new Task
      </ModalButton>

      <ListTask
        tasks={tasks}
        setTasks={setTasks}
      />
    </section>
  )
}

export default Tareas