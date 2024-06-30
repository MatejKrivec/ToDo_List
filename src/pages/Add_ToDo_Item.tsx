/*import React, { useState } from 'react';
import '../assets/Add_ToDo_Item.css';
import {  Button, Form, TextArea, FormGroup, FormLabel } from '@carbon/react';

interface AddToDoItemProps {
  onClose: () => void;
  onAddItem: () => void;
}

const Add_ToDo_Item = ({ onClose, onAddItem }: AddToDoItemProps) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (description.trim() === '') {
      alert('Description cannot be empty');
      return;
    }
    const existingItems = JSON.parse(localStorage.getItem('todoItems') || '[]');
    const newItem = { description, completed: false };
    localStorage.setItem('todoItems', JSON.stringify([...existingItems, newItem]));

    onAddItem();
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <Form onSubmit={handleSubmit}>
          <FormGroup legendText="Add a ToDo Item">
          <FormLabel>
              
          </FormLabel>
            <TextArea
              id="description"
              labelText=""
              rows={15}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your task description"
            />
          </FormGroup>
          <div className='formButtons'>
            <Button kind="danger" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button kind="primary" type="submit">
              Add Item
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Add_ToDo_Item;*/
