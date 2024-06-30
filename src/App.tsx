import React, { useState, useEffect } from 'react';
import './App.scss';
import { Button, Checkbox, Modal, TextInput, DataTable, TableContainer,
         Table, TableHead, TableRow, TableHeader, TableBody, TableCell, InlineNotification } from '@carbon/react';
import { TrashCan } from '@carbon/icons-react';

interface ToDoItem {
  description: string;
  completed: boolean;
}

function App() {
  const [addItemVisible, setAddItemVisible] = useState(false);
  const [todoItems, setTodoItems] = useState<ToDoItem[]>([]);
  const [newItemDescription, setNewItemDescription] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    handleLoadItems();
  }, []);

  const handleLoadItems = () => {
    const storedItems = JSON.parse(localStorage.getItem('todoItems') || '[]');
    setTodoItems(storedItems);
  };

  const handleDeleteItem = (index: number) => {
    const storedItems = JSON.parse(localStorage.getItem('todoItems') || '[]');
    storedItems.splice(index, 1);
    localStorage.setItem('todoItems', JSON.stringify(storedItems));
    setTodoItems(storedItems);
  };

  const handleToggleComplete = (index: number) => {
    const updatedItems = [...todoItems];
    updatedItems[index].completed = !updatedItems[index].completed;
    localStorage.setItem('todoItems', JSON.stringify(updatedItems));
    setTodoItems(updatedItems);
  };

  const handleAddItem = () => {
    if (newItemDescription.trim() === '') {
      setShowNotification(true);
      return;
    }

    const existingItems = JSON.parse(localStorage.getItem('todoItems') || '[]');
    const newItem = { description: newItemDescription, completed: false };
    localStorage.setItem('todoItems', JSON.stringify([...existingItems, newItem]));

    handleLoadItems();
    setNewItemDescription('');
    setAddItemVisible(false);
  };

  const headers = [
    {
      key: 'completed',
      header: 'Completed',
    },
    {
      key: 'description',
      header: 'Description',
    },
    {
      key: 'actions',
      header: 'Actions',
    },
  ];

  const rows = todoItems.map((item, index) => ({
    id: `${index}`,
    description: item.description,
    completed: (
      <Checkbox
        labelText=""
        id={`checkbox-${index}`}
        checked={item.completed}
        onChange={() => handleToggleComplete(index)}
      />
    ),
    actions: (
      <Button
        className='deleteBtn '
        kind="danger"
        size="sm"
        onClick={() => handleDeleteItem(index)}
      >
        <TrashCan />
      </Button>
    ),
  }));

  return (
    <>
      <div className='title'>
        <h1>TODO List application</h1>
      </div>
      <div className='addItemBtn'>
        <Button onClick={() => setAddItemVisible(true)}>Add a to do item</Button>
        <Modal open={addItemVisible} onRequestClose={() => setAddItemVisible(false)} modalHeading="Add a ToDo Item" primaryButtonText="Add" secondaryButtonText="Cancel" onRequestSubmit={handleAddItem}>
          <TextInput
            id="description"
            labelText="Description"
            value={newItemDescription}
            onChange={(e) => setNewItemDescription(e.target.value)}
            placeholder="Enter your task description"
          />
          {showNotification && (
            <InlineNotification
              kind="error"
              title="Error"
              subtitle="Description cannot be empty"
              onClose={() => setShowNotification(false)}
            />
          )}
        </Modal>
      </div>
      <div>
        <DataTable rows={rows} headers={headers}>
          {({
            rows,
            headers,
            getHeaderProps,
            getRowProps,
            getTableProps,
            getTableContainerProps,
          }) => (
            <TableContainer title="ToDo List" {...getTableContainerProps()}>
              <Table {...getTableProps()} aria-label="ToDo List">
                <TableHead>
                  <TableRow>
                    {headers.map((header) => (
                      <TableHeader
                        {...getHeaderProps({ header })}
                        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
   
                        }}
                      >
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow {...getRowProps({ row })}>
                      {row.cells.map((cell) => (
                        <TableCell
                          key={cell.id}
                          className={`${cell.info.header === 'description' ? 'description-cell' : ''} ${todoItems[parseInt(row.id)].completed ? 'checked' : ''}`}
                          >
                          {cell.value}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DataTable>
      </div>
    </>
  );
}

export default App;
