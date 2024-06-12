import React, { useState, ChangeEvent, MouseEventHandler } from 'react';
import './styles.css';

type Item = {
  id: string;
  text: string;
  completed: boolean;
}

const Todo = () => {
  const [currentItem, setCurrentItem] = useState<string>('');
  const [completeItem, setCompleteItem] = useState<Item[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentItem(event.target.value);
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (currentItem.trim() === '') {
      return;
    }

    const uniqueID = Math.random().toString(36).substr(2, 9);
    const newItem = { id: uniqueID, text: currentItem, completed: false };
    setCompleteItem([...completeItem, newItem]);
    setCurrentItem('');
  }

  const handleDelete = (deleteID: string) => {
    const deletedList = completeItem.filter((item) => item.id !== deleteID);
    setCompleteItem(deletedList);
  }

  const handleCompletedTask = (completeID: string) => {
    const updatedItems = completeItem.map((item) => 
      item.id === completeID ? { ...item, completed: !item.completed } : item
    );
    setCompleteItem(updatedItems);
  }

  return (
    <div className="main">
      <div className="app">
        <input 
          type="text"
          onChange={handleChange}
          className="input_bar"
          value={currentItem}
          placeholder='Try typing "Buy milk"...'

        />
        <button
          style={{ '--clr': '#39FF14' } as React.CSSProperties}
          type="submit"
          className="submit_btn"
          onClick={handleClick}
        >
          <span>Add</span>
          <i></i>
        </button>
      </div>
      <div className="item_list">
        {completeItem.map((item) => (
          <div key={item.id}>
            <div className={`${item.completed ? 'dark' : 'light'} individual_item`}>
              {item.text}
            </div>
            <div className="btns">
              <button
                className="func_btns del_btn"
                onClick={() => handleDelete(item.id)}
              >
                <span 
                className="material-symbols-outlined"

              >close</span>
              </button>
              
              <input 
                type="checkbox"
                className="func_btns check_box"
                onClick={() => handleCompletedTask(item.id)}
                checked={item.completed}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
