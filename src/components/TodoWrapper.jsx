import { useState } from "react";
import CreateForm from "./CreateForm";
import TodoItem from "./TodoItem";
function TodoWrapper() {
  const [items, setItems] = useState([
    { id: Math.random(), content: "123",isCompleted: true, isEditing: false },
    { id: Math.random(), content: "aaa",isCompleted: false, isEditing: false },
    { id: Math.random(), content: "bdsa",isCompleted: false, isEditing: false },
    
  ]);

  const addItems = (content) => {
    setItems([
        ...items, 
        {
            id: Math.random(),
            content: content, 
            isCompleted: false, 
            isEditing: false
             
        }
    ]);
  };

  const deleteItems = (id) => {
    setItems(
      items.filter((item) => {
        return item.id !== id;
      })
    );
  };
  const toggleCompleted = (id) => {
    setItems(
      items.map((item) => {
        return item.id === id
          ? { ...item, isCompleted: !item.isCompleted }
          : item;
      })
    );
  };

  const toggleIsEditing = (id) => {
    setItems(
      items.map((item) => {
        return item.id === id
          ? { ...item, isEditing: !item.isEditing }
          : item;
      })
    );
  };
  const editItem = (id, newContent) => {
    setItems(
        items.map((item) => {
            return item.id === id
            ? { ...item, content: newContent, isEditing:false }
          : item;
        })
    )
  }

  return (
    <div className="wrapper">
      <h1>待辦事項</h1>
      <CreateForm addItems={addItems} />

      {items.map((item) => {
        return (
          <TodoItem
            item = {item}
            key = {item.id} 
            deleteItems = {deleteItems}
            toggleCompleted = {toggleCompleted}
            toggleIsEditing = {toggleIsEditing}
            editItem = {editItem}
          />
        );
      })}
    </div>
  );
}
export default TodoWrapper;
