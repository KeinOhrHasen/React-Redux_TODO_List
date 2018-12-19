import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import './styles/base.scss';
import MainLayout from "./Layout/Main";
// import HomeContainer from "./containers/Home";
// import AboutContainer from "./containers/About";
// import ItemsContainer from "./containers/Items";
// import ItemDetailsContainer from "./containers/ItemDetails";
import {PATHS} from "./constants/routes";

// import PureComp1 from "./components/Dashboards/PureComponent";
// import PureComp2 from "./components/Dashboards/PureComponent2";
import NotFoundPage from "./components/NotFoundComponent/NotFoundPage";
// import Lifting from "./components/Lifting/lifting";

import {Provider} from "react-redux";

// import PrivateRoute from "./containers/privateRout/index";

// project
import SignUp from "./components/ToDo/containers/authorization/signUpPage";
import LoginPage from "./components/ToDo/containers/authorization/loginPage";
// import Todos from "./components/ToDo/logout";
import PrivateRouteTodos from "./components/ToDo/PrivateRouteTodos";

// ----------TODOS----------
import * as TodoActions from './actions/todoActions';
import {configureStore}  from "./store/index";
// Create a Store from the Configuration, we can pass a Initial State here
import TodoContainer from './components/ToDo/containers/todos/todoContainer'

const store = configureStore()

// At first dispatch a Get Todos Actions, So we'll recieve the Todos 
// fetched from the server at the start of the app
store.dispatch(TodoActions.GetTodos())   //I DONT ADD IT TO MY APP

// ----------TODOS----------


class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <MainLayout>
              <Switch>
                {/* <Route exact path={PATHS.INDEX} component={HomeContainer} /> */}
                {/* <Route path={PATHS.ABOUT} component={AboutContainer}/> */}
                {/* <Route exact path={PATHS.ITEM_DETAILS} component={ItemDetailsContainer} /> */}
                {/* <Route exact path={PATHS.DASHBOARD1} component={PureComp1} /> */}
                {/* <Route path={PATHS.LIFTING} component={Lifting} /> */}
                {/* <PrivateRoute exact path={PATHS.ITEMS} component={ItemsContainer} /> */}
                <Route exact path={PATHS.INDEX} render={() => (<Redirect to={PATHS.TODOS}/>) }/>
                <PrivateRouteTodos exact path={PATHS.TODOS} component={TodoContainer} />
                <Route exact path={PATHS.SIGNUP} component={SignUp} />
                <Route exact path={PATHS.LOGIN} component={LoginPage} />
                <Route exact component={NotFoundPage} />
              </Switch>
            </MainLayout>
          </div>
        </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
