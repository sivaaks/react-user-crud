import {useHistory} from 'react-router-dom';
import {Container,Form,Button} from 'react-bootstrap';

import Header from './Header';

export default function ViewUpdate(props){

    const history= useHistory();
    const index= props.match.params.id;
    const user= JSON.parse(localStorage.getItem(`users`));
    console.log(user[index]);
    const {userName,phone,email}= user[index];

    const handleBack=()=>history.push('/users');

    return (
        <>
        <Header/>
        <Container>
        <Form>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control readOnly type="text" value={userName}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" readOnly  value={phone}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" readOnly value={email}></Form.Control>
            </Form.Group>
        </Form>
        <br/>
        <Button varaint="primary" onClick={handleBack}>Back</Button>
        </Container>
        </>
    )

}
