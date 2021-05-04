import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
    return (
        <div>
            <Header />

            {
                notes.map((inotes) => (
                    <Note key={inotes.key} title={inotes.title} content={inotes.content} />
                ))
            }

            <Footer />
        </div>
    );
}

export default App;