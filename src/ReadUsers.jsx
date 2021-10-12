import { useEffect,useState } from 'react';
import {useHistory} from 'react-router-dom';
import {Card,Container,Button,Modal} from  'react-bootstrap';
import Header from './Header';

import './styles/app.css';

export default function ReadUsers() {

    const history= useHistory();
    const [users,setUsers]= useState([]);
    const [deleteModal,setDeletModal]= useState(false);
    const [deleteIndex,setDeleteIndex]= useState();

    const deleteUser=(index)=>{
        users.splice(index,1);
        localStorage.setItem('users',JSON.stringify(users));
        setUsers(JSON.parse(localStorage.getItem('users')));
    }

    const deleteConfirmation=(index)=>{
        setDeleteIndex(index);
        modalShow();
    }

    const modalDelete=()=>{
        deleteUser(deleteIndex);
        setDeleteIndex();
        modalHide();
    }

    const modalHide=()=>setDeletModal(false);
    const modalShow=()=>setDeletModal(true);

    const viewProfile=(index)=>history.push(`/profile/${index}`);
    const editProfile=(index)=>history.push(`/edit-profile/${index}`);

    useEffect(()=>{
        setUsers(JSON.parse(localStorage.getItem('users')));
    },[])

    return (
        <>
        <Header/>
        <Modal show={deleteModal} onHide={modalHide}>
            <Modal.Header closeButton>
                <Modal.Title>Delete user?</Modal.Title>
             </Modal.Header>
             <Modal.Body>Confirm delete user, this cannot be undone</Modal.Body>
             <Modal.Footer>
                <Button variant="danger" onClick={modalDelete}>Yes, delete</Button>
                <Button variant="secondary" onClick={modalHide}>No, Don't delete</Button>
            </Modal.Footer>
         </Modal>
        <Container className="users-list">
        {users!==null && users.length>0 ? users.map((user,index)=>{
           return (
               <Card className="each-user" key={index}>
                    <Card.Body>
                        <Card.Title>Username : {user.userName}</Card.Title>
                        <Card.Text>Email : {user.email}</Card.Text>
                        <Card.Text>Phone : {user.phone}</Card.Text>
                        <Button variant="primary" onClick={()=>viewProfile(index)}>View</Button> &nbsp;
                        <Button variant="warning" onClick={()=>editProfile(index)}>Update</Button> &nbsp;
                        <Button variant="danger" onClick={()=>deleteConfirmation(index)}>Delete</Button> &nbsp;
                    </Card.Body>
                </Card>
           )
        }):<p>No users added</p>}
         </Container>
        </>
    )

}