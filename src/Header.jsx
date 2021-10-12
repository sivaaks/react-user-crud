import {useHistory} from 'react-router-dom';
import {Nav,Container } from "react-bootstrap";

export default function Header(){

    const navigate= useHistory();

    const navigation=(dest)=>{
       if(dest==='create') navigate.push('/create-user')
       if(dest==='dashboard') navigate.push('/users');
    }

    return (
        <Container fluid className="navigation-container">
        <Container>
            <Nav>
                <Nav.Link onClick={()=>navigation('dashboard')}>Dashboard</Nav.Link>
                <Nav.Link onClick={()=>navigation('create')}>Create user</Nav.Link>
            </Nav>
        </Container>
        </Container>
    )

}