 
 import styled from 'styled-components'
 import { observerSelectedTask, observerRemoveTask } from '../utils/task'

 const Button = styled.button`
  padding:1rem;
  font-weight:bold;
  text-transform: uppercase;
  text-align:center;
  color:#fff;
  background: #ff006f;
  border:0;
  border-radius:4px;
  cursor: pointer
 `

export const AppButton = () => {

  const removeTask = () => {
    const task = observerSelectedTask.get()
    observerRemoveTask.set(task)
  }

  return (
    <Button onClick={removeTask}>Remover</Button>
  )
}