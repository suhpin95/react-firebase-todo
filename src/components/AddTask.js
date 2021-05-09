import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'


const AddTask = () => {
    // use hooks to maintain state
    const [state, setState] = useState();
    
    const handleState = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event)=> {
        event.preventDefault();
        setState({
           ...state,
           title:'',
           description: ''
        })
    }
    
    return (
        <div className = 'form'>
            <Form onSubmit = { handleSubmit }>
                <FormGroup>
                    <Label>Title</Label>
                    <Input type='text' name = 'title' placeholder='Title' onChange = { handleState } value = { state.title }></Input>
                    <Label>Description</Label>
                    <Input type='text' name = 'description' placeholder='Description' onChange = { handleState } value = { state.description }></Input>
                </FormGroup>
                <Button> Submit </Button>
            </Form>
        </div>
    )
}

export default AddTask
