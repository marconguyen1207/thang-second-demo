// resources/js/components/Home.js

import React from 'react';
import ReactDOM from 'react-dom';

export default function Login() {
    return (
        <h1>This is Login Page</h1>
    );
}

if (document.getElementById('login')) {
    ReactDOM.render(<Login />, document.getElementById('login'));
}