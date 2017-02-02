import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import LoginForm from './components/LoginForm';

class App extends Component{
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyCFbGfPMFNWdpJ20pz27gXS_0SmF43qmY0",
            authDomain: "manager-d8054.firebaseapp.com",
            databaseURL: "https://manager-d8054.firebaseio.com",
            storageBucket: "manager-d8054.appspot.com",
            messagingSenderId: "84786545667"
        };
        firebase.initializeApp(config);
    }


    render() {
        return(
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <LoginForm/>
        </Provider>

        );
    }
}

export default App;