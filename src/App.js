import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import EachTodo from './components/myTask/Todos'

import './App.css'

class App extends Component {
  state = {userInput: '', list: [], check: false, textLength: false}

  onSubmitForm = event => {
    event.preventDefault()
    const {userInput, check, textLength} = this.state

    const newData = {
      id: uuidv4(),
      userInput,
      check,
      textLength,
    }
    if (userInput.length > 0) {
      this.setState(prevState => ({
        list: [...prevState.list, newData],
        userInput: '',
      }))
      const {list} = this.state
      localStorage.setItem('todoList', JSON.stringify(list))
    } else {
      this.setState(prevState => ({textLength: !prevState.textLength}))
      const {list} = this.state
      localStorage.setItem('todoList', JSON.stringify(list))
    }
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickCheckBox = () => {
    this.setState(prevState => ({check: !prevState.check}))
  }

  deleteTodo = id => {
    const todos = localStorage.getItem('todoList')
    const list = JSON.parse(todos)
    const newList = list.filter(each => each.id !== id)
    this.setState({list: [...newList]})

    localStorage.setItem('todoList', JSON.stringify(newList))
  }

  makeItEditable = (id, value) => {
    this.setState({userInput: value})
    const todoItem = localStorage.getItem('todoList')
    const list = JSON.parse(todoItem)
    const withOutItem = list.filter(each => each.id !== id)
    const {userInput, check, textLength} = this.state
    const editableInput = {id, userInput, check, textLength}
    const updatedItem = [...withOutItem, editableInput]
    console.log(updatedItem)

    localStorage.setItem('todoList', JSON.stringify(updatedItem))
  }

  addUpdatedItemInList = () => {
    const {check} = this.state
    this.setState({check}, this.render)
  }

  render() {
    const {userInput, check, textLength} = this.state
    const todoList = localStorage.getItem('todoList')
    const todosList = JSON.parse(todoList)
    // console.log(JSON.parse(todoList))
    return (
      <div className="container">
        <h1 className="heading">Todo List</h1>

        <form className="form-container" onSubmit={this.onSubmitForm}>
          <div className="description-styles">
            <input
              type="text"
              placeholder="Enter your text"
              className="user-input"
              onChange={this.onChangeUserInput}
              value={userInput}
            />
            {textLength && <p className="add-text">*required Input Text</p>}
          </div>
          <input
            type="checkbox"
            className="check-box"
            onClick={this.onClickCheckBox}
            value={check}
          />
          <button type="submit" className="button">
            Add
          </button>
        </form>

        <h1 className="heading">Add Tasks</h1>
        <ul className="list-item">
          {todosList.length > 0 ? (
            todosList.map(each => (
              <EachTodo
                key={each.id}
                list={each}
                deleteTodo={this.deleteTodo}
                makeItEditable={this.makeItEditable}
                addUpdatedItemInList={this.addUpdatedItemInList}
              />
            ))
          ) : (
            <li className="list" key="1">
              {' '}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default App
