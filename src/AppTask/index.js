import styled from 'styled-components'
import { observerSelectedTask } from '../utils/task'

const AppItem = styled.li`
 padding:5px 0;

  &.selected {
    color: #ff00a4
  }

`
export const AppTask = (props) => {
   
  const selectTask = (task) => {
    observerSelectedTask.set({ ...task, selected: true })
  }
  
  return (
    <AppItem 
      className={props.task.selected ? 'selected' : ''}
      onClick={() => selectTask(props.task)}
    >
      {props.task.title}
    </AppItem>
  )
}