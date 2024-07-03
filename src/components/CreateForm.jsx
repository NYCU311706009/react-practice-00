import { useState } from "react";

function CreateForm({addItems}) {
    
    const [content, setContent] = useState('');
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        addItems(content)
        setContent('')
    }


    return (
        <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="輸入待辦事項" 
        // two way binding
        value={content} 
        onChange={(e) => {setContent(e.target.value)}}/>   
        <button type="submit">加入</button>
        </form>
    );
}
export default CreateForm;
