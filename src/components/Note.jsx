import React from "react";

function Note(props) {
    return (
        <div className="note">
            <h1 className="note">{props.title}</h1>
            <p className="note">{props.content}</p>
        </div>
    );
}

export default Note;