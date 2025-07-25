import { useState } from 'react';
import S from './form.module.scss';

export const Form = () => {
   const [title, setTitle] = useState('')
   const [discription, setDiscription] = useState('')
   console.log(title, discription);
   return (
      <form className={S.form}>
      <input className={S.formInputTitle} type='text' placeholder='Title' onChange={(e) => setTitle(e.target.value)}/>
      <input className={S.formInputDiscription} type='text' placeholder='Discription' onChange={(e) => setDiscription(e.target.value)}/>
      <button className={S.formButton}>Add task</button>
   </form>
   )
}