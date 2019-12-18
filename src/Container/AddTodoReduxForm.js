import React, {Component} from 'react';
import {Field, reduxForm,formValues} from 'redux-form';
import { addTodo } from '../Actions';
//import { formValueSelector } from 'redux-form'



const handleSubmit = (e,dispatch) => {
    let input = formValues('addtask')(AddTodoReduxForm)
    console.log(input)
    if (!input.value.trim()) {
      return
    }
    dispatch(addTodo(input.value))
    input.value = ''
  };

class AddTodoReduxForm extends Component {
  render () {
    
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="Task"
          component={'input'}
          type="text"
          placeholder="Enter Task Here"
        />
        <button type="submit" label="submit">Add Task -- Useing redux-form </button>
      </form>
    );
  }
}

AddTodoReduxForm = reduxForm ({
  form: 'addtask',
}) (AddTodoReduxForm);

export default AddTodoReduxForm;