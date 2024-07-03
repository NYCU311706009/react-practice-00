
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

function TodoItem({item, deleteItems, toggleCompleted, toggleIsEditing, editItem}){
    return item.isEditing ? (
      <EditForm item = {item} editItem = {editItem}/>
    ) : (
      <div className={`todoItem ${item.isCompleted ? "completed" : ""}`}>
        <p
          onClick={() => {
            toggleCompleted(item.id);
          }}
        >
          {item.content}
        </p>
        <div className="todoItemEdit">
          <MdDeleteForever
            onClick={() => {
                deleteItems(item.id);
            }}
            style={{ cursor: "pointer" }}
          />
          <MdEdit onClick={() => {
                toggleIsEditing(item.id);
            }} 
            style={{ cursor: "pointer", marginLeft: "5px" }} />
        </div>
      </div>
    );
}
export default TodoItem;