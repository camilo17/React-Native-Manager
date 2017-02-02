import React , {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardSection, Input, Button} from './common';

import {emailChanged, passwordChanged, loginUser} from '../actions/index'



class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress() {
       const { email, password} = this.props

        this.props.loginUser({email, password});
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}
                        Login
                    />
                </CardSection>

            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email //this is from the Auth Reducer which return a new object with the updated email property
        password: state.auth.password
    };
}


export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser}) (LoginForm);
//mapStateToProps is now added as a prop to the component for us to use.


