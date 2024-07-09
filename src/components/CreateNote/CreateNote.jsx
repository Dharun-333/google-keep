import { useState } from 'react';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import "./CreateNote.css"


export const CreateNote = (props) => {
    const [isExpand, setIsExpand] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const expand = () => {
        setIsExpand(true);
       
    }
   


    const submitNote = (events) => {
        events.preventDefault();
        props.addNote(note)
        setNote({
            title: "",
            content: "",
        });
setIsExpand(false)

        // const submitNote = (event) => {
        //     event.preventDefault();
        //     props.addNote(note);
        //     setNote({
        //        title:"",
        //        content:"",
        //     })
        // }
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    };


    return (
        <div>
            <form className="create-note">
                {isExpand && <input name="title"
                    placeholder="Title"
                    type="text"
                    onChange={handleChange}
                    value={note.title} />}

                <textarea name="content"
                    placeholder="Take a note..."
                    onClick={expand}
                    onChange={handleChange}
                    rows={isExpand ? 3 : 1}
                    value={note.content} />
                <Zoom in={isExpand}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}
export default CreateNote;


