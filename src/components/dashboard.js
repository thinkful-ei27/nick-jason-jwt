import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import logout from './logout';
import { timerTest } from '../actions/auth';

export class Dashboard extends React.Component {
    componentDidMount() {
        timerTest(this.props.dispatch);
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        let warningMessage;
        if(this.props.warning){
            warningMessage = (<div><h3>YOU GOT A MINUTE</h3></div>)
        }
        return (
            <div className="dashboard">
                {warningMessage}
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data,
        warning: state.auth.warning
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
