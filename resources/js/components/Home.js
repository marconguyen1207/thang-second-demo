// resources/js/components/Home.js

import React from 'react';
import ReactDOM from 'react-dom';

export default function Home() {
    return (
        <h1>This is Home Page</h1>
    );
}

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}