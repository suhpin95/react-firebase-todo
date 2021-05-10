import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { v4 as uuid_v4 } from "uuid";
import db from "../services/firebase";


const AddTask = () => {
    // use hooks to maintain state
    const initialState = {
        id: '',
        title: '',
        description: ''
    }
    const [state, setState] = useState(initialState);
    
    const handleState = (event) => {
        setState({
            ...state,
            id: uuid_v4(),
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event)=> {
        event.preventDefault();
        console.log(state)
        setState({
           ...state,
           id: '',
           title:'',
           description: ''
        })
        setData( state ) // insert into firebase 
    }

    const setData = async ( state ) => {
        const response = db.collection('tasks')
        try{    
            await response.add(state);
        } catch( err ){
            console.log(err)
        }        
          
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
