import React, { useState } from 'react'

function Form() {

    const [form, setForm] = useState({
        name: '',
        age: 0
    });

    const handelChange = (event) => {
        setForm({
            ...form,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit Clicked!')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={form.name}
                    name="name"
                    placeholder='enter name'
                    onChange={handelChange}
                />
                <input
                    type="number"
                    value={form.age}
                    name="age"
                    placeholder='enter age'
                    onChange={handelChange}
                />

                <input type="submit" value="Submit Form"/>
            </form>

            <h4>{form.name} {form.age}</h4>
        </div>
    )
}

export default Form