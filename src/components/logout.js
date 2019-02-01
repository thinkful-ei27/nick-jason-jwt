import React from 'react';
import { render } from 'react-dom';


export default function logout(props){
const MINUTES_UNTIL_LOGOUT = 5; //in mins
function logoutComponent(){ return (<div role = 'container'>
<h3>YOU OUTTA TIME, FOO</h3>
</div>)};
function timer(component){
    setTimeout(component, 5000)
}

return timer(logoutComponent);
}