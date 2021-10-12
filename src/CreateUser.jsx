import {useState} from 'react';
import {useHistory}from 'react-router-dom';
import {Form,Container,Button} from 'react-bootstrap';

import Header from './Header';

export default function CreateUser(){

    const history= useHistory();
    const [userName,setUserName]= useState('');
    const [email,setEmail]= useState('');
    const [phone,setPhone]= useState('');
    const [password,setPassword]= useState('');
   
    const handleInput=({target:{name,value}})=>{
        if(name==='userName') setUserName(value);
        if(name==='email') setEmail(value);
        if(name==='phone') setPhone(value);
        if(name==='password') setPassword(value);
    }

    const createUser=(user)=>{
        let users=[];
        users=JSON.parse(localStorage.getItem('users'));
        if(users!==null) {
            users.push(user);
            localStorage.setItem('users',JSON.stringify(users));
        } else {
            localStorage.setItem('users',JSON.stringify([user]));
        }
        history.push('/users');
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        createUser({
            userName,email,phone,password
        });    
        // page.push('/user-details',{
        //     userName,
        //     phone,
        //     email,
        //     password,
        //     },
        // );
    }

   
    return(
        <>
        <Header/>
        <Container>
            <h3>Create user</h3>
             <Form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="userName" value={userName} onChange={handleInput}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={email} onChange={handleInput}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="number" name="phone" value={phone} onChange={handleInput}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={password} onChange={handleInput}></Form.Control>
                    </Form.Group>
                   <br/>
                    <Button type="submit" name="submit" onClick={handleSubmit}>Create user</Button>
             </Form>
        </Container>
        </>
    )

}
