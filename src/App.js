import { useState } from 'react'
import styled from 'styled-components'
import { AppButton } from './AppButton'
import { AppTaskList } from './AppTaskList'
import { AppCreateTask } from './AppCreateTask'

import { sort } from './utils/sort'
import { observerCreateTask, observerRemoveTask, observerSelectedTask } from './utils/task'


const AppContainer = styled.div`
  padding:0 1rem;
`

function App() {

  const [ tasks, setTasks ] = useState([])

  const [hasSelectedTask, setHasSelectedTask] = useState(false)

  observerCreateTask.on( task => {
    const id = tasks.length + 1
    setTasks([ ...tasks, { id, ...task }])
  })

  observerSelectedTask.on((task) => {
    setSelectedTask(task)
    setHasSelectedTask(true)
  })

  observerRemoveTask.on((taskToRemove) => {
    removeTask(taskToRemove)
    setHasSelectedTask(false)
  })

  const removeTask = (taskToRemove) => {
    const newTaskList = tasks.filter(task => task.id !== taskToRemove.id)
    setTasks(newTaskList)
  }

  const setSelectedTask = (selectedTask) => {
    const filterdTasks = tasks.filter( task => task.id !== selectedTask.id)
    const updatedTasks = filterdTasks.map( task => ({ ...task, selected: false}))
    setTasks([...updatedTasks, selectedTask])
  }

  return (
    <>
      <AppContainer>
        <h1>Tarefas</h1>
      </AppContainer>
      <AppCreateTask />
      <AppTaskList tasks={sort(tasks)} setSelectedTask={setSelectedTask} />
      <AppContainer>
      { hasSelectedTask ? <AppButton/> : ''}        
      </AppContainer>
    </>
  );
}

export default App;
