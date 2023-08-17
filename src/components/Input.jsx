import React from 'react';
import { IoMdAttach } from 'react-icons/io';
import { AiOutlineFileAdd,AiOutlineSend } from 'react-icons/ai';
const Input = () => {
  return (
    <div className='text'>
      <input type='text' id='text-field' placeholder='Type here to text....'/>
      <div className='doc'>
        <input type='file' id='pic' style={{display:'none'}}/>
        <label htmlFor='pic'>
        <IoMdAttach size={30} />
        </label>
        <input type='file' id='file' style={{display:'none'}}/>
        <label htmlFor='file'>
        <AiOutlineFileAdd size={30}/>
        </label>
        <button><AiOutlineSend size={20}/></button>
      </div>
    </div>
  )
}

export default Input;
