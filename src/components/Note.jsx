import React from "react";

function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className="note">
            <h1 className="note">{props.title}</h1>
            <p className="note">{props.content}</p>
            <button className="note" onClick={handleClick}>X</button>
        </div>
    );
}

export default Note;