import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const [newName, setNewName] = useState("");
  const [newMail, setNewMail] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleMailChange = (event) => {
    setNewMail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Form
        newName={newName}
        newMail={newMail}
        newMessage={newMessage}
        handleNameChange={handleNameChange}
        handleMailChange={handleMailChange}
        handleMessageChange={handleMessageChange}
      />
    </div>
  );
}

export default App;
