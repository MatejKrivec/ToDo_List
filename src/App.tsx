import { useState } from 'react'
import './App.scss'
import { Button } from '@carbon/react'
import Add_ToDo_Item from './pages/Add_ToDo_Item'



function App() {
  const [addItemVisible, setAddItemVisible] = useState(false)

  const ToggleAddItem = () => {
    setAddItemVisible(!addItemVisible)
  }


  return (
    <>
    {addItemVisible ? (
      <Add_ToDo_Item onClose={ToggleAddItem} />
    ) : (
      <>
        <div className='title'>
          <h1>To Do list</h1>
        </div>
        <div>
          <Button className='addItemBtn' kind="primary"
          onClick={ToggleAddItem}>Add a to do item</Button>
        </div>
      </>
    )}
  </>
  )
}

export default App
