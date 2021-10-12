import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';

import createUser from './CreateUser';
import ReadUsers from './ReadUsers';
import ViewUser from './ViewUser';
import EditUser from './EditUser';

export default function App(){

    return (
        <BrowserRouter>
        <Redirect to='/users'></Redirect>
            <Switch>
            <Route path='/users' component={ReadUsers}></Route>
            <Route exact path='/create-user' component={createUser}></Route>
            <Route exact path='/profile/:id' component={ViewUser}></Route>
            <Route exact path='/edit-profile/:id' component={EditUser}></Route>
            </Switch>
        </BrowserRouter>
    )
    
}