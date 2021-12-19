import React, { useState } from 'react'
import Todo from './Todo/Todo';
import './page_5.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function Page_5() {

  const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem('todos')) || [])

  function removeHandler(evt) {
    const { id } = evt.target.dataset;
    const filteredTodos = todos.filter((todo) => todo.id !== Number(id));
    setTodos(filteredTodos)
    window.localStorage.setItem('todos', JSON.stringify(filteredTodos));
  }

  return (<>
    <Header />
    <section>
      <div className="post-block">
        <h1 className="post-title">Настройки публикации</h1>
        <p className="input-text">Название</p>
        <input className='post-input' placeholder='Text input' onKeyUp={(e) => {
          if (e.code === 'Enter') {
            let newTodo = {
              id: new Date().getTime(),
              title: e.target.value
            }
            window.localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
            setTodos([newTodo, ...todos])
            e.target.value = null;
          }
        }} type="text" />
        <p className="textarea-text">Описание</p>
        {
          todos.length && todos.map((todo) => {
            return <Todo className="post-textarea" todo={todo} key={todo.id} removeHandler={removeHandler} />
          })
        }
      </div>
    </section>
    <Footer />
  </>
  );
}

export default Page_5