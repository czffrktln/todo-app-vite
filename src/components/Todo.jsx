import { useState } from "react"

function Todo({data, onDelete}) {

  const [isComplete, setIsComplete] = useState(false)

  const changeCompleteStatus = () => {
    setIsComplete(!isComplete)
  }

  return (
    <div className="Task">
      <div className={isComplete ? "completed" : "to_do"}>{data.task}</div>
      <div className="buttons">
      <button onClick={changeCompleteStatus}>{isComplete ? "completed" : "complete"}</button>
      <button onClick={onDelete}>X</button>
      </div>
    </div>
  )
}

export default Todo