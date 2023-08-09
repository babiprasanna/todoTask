import Popup from 'reactjs-popup'
import {CiEdit} from 'react-icons/ci'
import './index.css'

const EachTodo = props => {
  const {list, deleteTodo, makeItEditable, addUpdatedItemInList} = props
  const {id, userInput, check, textLength} = list

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  const onChangeUserInputEditable = event => {
    console.log(event.target.value)
    makeItEditable(id, event.target.value)
  }

  const addUpdatedItem = () => {
    addUpdatedItemInList(id)
  }

  return (
    <li className="bg-container">
      <div>
        <p className="text">{userInput}</p>
        {check ? (
          <p className="text">Mark As Completed</p>
        ) : (
          <p className="text">Not Completed</p>
        )}
      </div>

      <Popup
        modal
        trigger={
          <button type="button" className="button2">
            <CiEdit className="icon" />
          </button>
        }
      >
        {() => (
          <>
            <div className="editable">
              <div className="description-styles">
                <input
                  type="text"
                  placeholder="Enter your text"
                  className="user-input"
                  onChange={onChangeUserInputEditable}
                />
                {textLength && <p className="add-text">*required Input Text</p>}
              </div>
              <button type="button" className="button" onClick={addUpdatedItem}>
                Edit
              </button>
            </div>
          </>
        )}
      </Popup>

      <Popup
        modal
        trigger={
          <button
            type="button"
            className="remove-button"
            onClick={onDeleteTodo}
          >
            Remove
          </button>
        }
      >
        {() => (
          <div className="pop-container">
            <div>
              <p className="paragraph">are you sure to delete todo</p>
            </div>
            <button
              type="button"
              className="popup-button"
              onClick={onDeleteTodo}
            >
              Yes
            </button>
          </div>
        )}
      </Popup>
    </li>
  )
}

export default EachTodo
