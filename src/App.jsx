// import { useState } from 'react'

import S from "./App.module.scss";
import { Form } from "./components/form/Form";
import { Todo } from "./components/todo/Todo";

function App() {
  return (
    <main className={S.main}>
      <section className={S.sectionForm}>
        <h1 className={S.sectionFormHeader}>Create todos</h1>
        <Form />
      </section>
      <section className={S.sectionTodos}>
        <h2 className={S.sectionTodosHeader}>My todo list</h2>
        <div className={S.sectionTodosItems}>
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
           <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
        </div>
      </section>
    </main>
  );
}

export default App;
