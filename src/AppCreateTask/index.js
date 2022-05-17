import styled from 'styled-components'
import { observerCreateTask } from "../utils/task"

const AppInput = styled.label`
  display:flex;
  flex-wrap: wrap;
  width:100%;
  padding:1rem;
  background: #5430db;
  
  span {
    display: flex;
    width:100%;
    margin-bottom:5px;
    font-size: .8rem;
    text-transform: uppercase;
    color:#fff
  }

  input {
    padding:1rem;
    width:100%;
    max-width:20rem;
    border:0;
    border-radius: 4px;
    background:#6e47ff;
    color: #fff;
    font-size: 1.2rem;
    &:focus {
      outline-color: #7f61ec;
      outline-style: double;      
    }
  }
`
export const AppCreateTask = () => {

  const setTitle = (event) => {
    const title = event.target.value
    const enter = 13
    if(event.keyCode === enter) {
      observerCreateTask.set({ title })
      event.target.value = ''
    }
  }

  return (
    <>
    <AppInput>
      <span>Nova tarefa </span>
      <input type="text" onKeyUp={setTitle}/>
    </AppInput>
    </>
  )
}