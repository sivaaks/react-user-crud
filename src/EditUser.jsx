import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import {Container,Form,Button} from 'react-bootstrap';

import Header from './Header';

export default function ViewUpdate(props){

    const history= useHistory();
    const index= props.match.params.id;
    const user= JSON.parse(localStorage.getItem(`users`));
    const [userName,setuserName] = useState(user[index].userName); 
    const [password,setPassword] = useState(user[index].password); 
    const [email,setEmail] = useState(user[index].email); 
    const [phone,setPhone] = useState(user[index].phone); 

    const handleBack=()=>history.push('/users');
    const handleUpdate=()=>{
        user[index].userName=userName;
        user[index].email=email;
        user[index].phone=phone;
        user[index].password=password;
        localStorage.setItem('users',JSON.stringify(user));
        handleBack();
    }

    const handleChange=({target:{name,value}})=>{
        if(name==='userName') setuserName(value);
        if(name==='password') setPassword(value);
        if(name==='email') setEmail(value);
        if(name==='phone') setPhone(value);
    }

    return (
        <>
        <Header/>
        <Container>
        <Form>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="userName" value={userName} onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone" name="phone" value={phone} onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" name="email" value={email} onChange={handleChange}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={password} onChange={handleChange}></Form.Control>
            </Form.Group>
        </Form>
        <br/>
        <Button varaint="primary" onClick={handleUpdate}>Update</Button> &nbsp;
        <Button varaint="primary" onClick={handleBack}>Back</Button>
        </Container>
        </>
    )

}
