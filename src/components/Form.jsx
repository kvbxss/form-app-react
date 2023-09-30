import React, { useState } from 'react';

const Form = ({ newName, newMail, newMessage, handleNameChange, handleMailChange, handleMessageChange}) => {
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const isEmailValid = (email) => {
    // This is a simple email validation regex. You can use a more robust one if needed.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNameBlur = () => {
    if (newName.trim() === '') {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

  const handleEmailBlur = () => {
    if (newMail.trim() === '') {
      setEmailError('Email is required');
    } else if (!isEmailValid(newMail)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handleMsgChange = (event) => {
    if (event.target.value.length > 120) {
      setMessageError('Message cannot exceed 120 characters');
    } else {
      setMessageError('');
      handleMessageChange(event);
    }
  };

  const isFormValid = () => {
    return (
      newName.trim() !== '' &&
      isEmailValid(newMail) &&
      newMessage.trim() !== '' &&
      newMessage.length <= 120
    );
  };

  const SubmitNotification = () => {
    if (isFormValid()) {
      alert('Thank you for your message!');
    }
  }


  return (
    <form onSubmit={() => SubmitNotification()} className="container flex flex-col items-center justify-center bg-white-700 rounded-xl shadow border p-8 m-10 text-[20px]">
      <h1 className="text-[50px]">Contact Me</h1>
      <h2 className='text-[25px] m-2'>We are always happy to find out what's on your mind</h2>
      <div>
        <input
          className='w-[300px] bg-white-700 rounded-xl shadow border p-2 m-3'
          value={newName}
          placeholder='Name'
          onChange={handleNameChange}
          onBlur={handleNameBlur}
        />
        {nameError && <div className="text-red-500">{nameError}</div>}
      </div>
      <div>
        <input
          className='w-[300px] bg-white-700 rounded-xl shadow border p-2 m-3'
          placeholder='Email'
          value={newMail}
          onChange={handleMailChange}
          onBlur={handleEmailBlur}
        />
        {emailError && <div className="text-red-500">{emailError}</div>}
      </div>
      <div>
        <textarea
          className='w-[300px] bg-white-700 rounded-xl shadow border p-2 m-3'
          value={newMessage}
          placeholder='Message'
          
          onChange={handleMsgChange}
        />
        {messageError && <div className="text-red-500">{messageError}</div>}
      </div>
      <div>
        <button
          type="submit"
          className={`w-[300px] text-[17px] ${isFormValid() ? 'bg-violet-500 animate-pulse hover:bg-violet-700 hover:animate-none hover:scale-[1.1]' : 'bg-gray-300 cursor-not-allowed'} text-white font-bold py-3 px-5 rounded-full ml-4 mt-4`}
          disabled={!isFormValid()}
        >
          Ask Us! -{'>'}
        </button>
      </div>
    </form>
  );
};

export default Form;
