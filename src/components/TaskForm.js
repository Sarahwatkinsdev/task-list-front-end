import React from 'react'

const TaskForm = () => {
    const [formFields, setFormFields] = React.useState({
        title: '',
        description: '',
        isComplete: null,
    });

    const handleChange = (evt) => 
        setFormFields({...formFields, [evt.target.name]: evt.target.value});

    return (
        <form>
            <section>
                <h2>Add A Task</h2>
                <div className = 'new_task_fields'>
                    <div>
                        <label htmlFor='title'>
                            Title: 
                        </label>
                        <input name='title' value={formFields.name} onChange={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor='description'>
                            Description: 
                        </label>
                        <input name='description' value={formFields.description} onChange={handleChange}></input>
                    </div>     
                    <button 
                        className='button new_task_submit'
                        type='submit'
                        value='Add Task'
                    >
                        Add Task
                    </button>          
                </div>
            </section>
        </form>
    )

}

export default TaskForm;