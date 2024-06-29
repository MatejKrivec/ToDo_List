import React from 'react'
import '../assets/Add_ToDo_Item.css'
import { Button } from '@carbon/react';

const Add_ToDo_Item = ({ onClose } : {onClose: () => void}) => {


 
  return (
    <div className="popup-overlay">
    <div className="popup-content">
      <form>
        <div className='formBody'>
          <label className='description' htmlFor="description">Description</label>
          <textarea id="description" />
        </div>
        <div className='formButtons'>
          <Button kind="danger" type="button" onClick={onClose}>Cancel</Button>
          <Button kind="primary" type="submit">Add Item</Button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Add_ToDo_Item
