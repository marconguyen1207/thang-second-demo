// resources/js/components/Home.js

import React from 'react';
import ReactDOM from 'react-dom';

export default function Aboutus() {
    return (
        <h1>This is About Us Page</h1>
    );
}

if (document.getElementById('aboutus')) {
    ReactDOM.render(<Aboutus />, document.getElementById('aboutus'));
}