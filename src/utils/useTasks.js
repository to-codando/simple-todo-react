import { useState } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState([
    {id: 1, title: 'Fazer um bolo de chocolate'},
    {id: 2, title: 'Comer o bolo de chocolate com cobertura'},
    {id: 3, title: 'Tomar um suco de groselha'}    
  ])

  const selectTask = (selectedTask) => {
    const filterdTasks = tasks.filter( task => task.id !== selectedTask.id)
    const updatedTasks = filterdTasks.map( task => ({ ...task, selected: false}))
    setTasks([...updatedTasks, selectedTask])
  }  

  const addTask = (task) => {
    const id = tasks.length + 1
    const newTask = { ...task, id }
    const newTasks = [...tasks, newTask ]
    setTasks(newTasks)
  }

  const removeTask = (id) => {
    const newTasks = tasks.filter( task => task.id !== id)
    setTasks(newTasks)
  }


  return [
    tasks,
    addTask,
    removeTask,
    selectTask
  ]
}