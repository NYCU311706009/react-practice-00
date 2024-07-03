import { useState } from "react";
function EditForm({item,editItem}) { 
    const [content, setContent] = useState(item.content);
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        editItem(item.id, content)
    }


    return (
        <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="輸入待辦事項" 
        // two way binding
        value={content} 
        onChange={(e) => {setContent(e.target.value)}}/>   
        <button type="submit">完成</button>
        </form>
    );
    
    
    
}
export default EditForm