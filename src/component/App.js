import React from 'react'
import Footer from './Footer'
import AddTodo from '../Container/AddTodo'
import VisibleTodoList from '../Container/VisibleTodoList'
import AddTodoReduxForm from '../Container/AddTodoReduxForm'




const App = () => (
  <div>
    <AddTodoReduxForm />
    <AddTodo />
    <VisibleTodoList />
    <Footer />

  </div>
)

export default App