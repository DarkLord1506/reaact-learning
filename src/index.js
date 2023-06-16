import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header_class'
import './styles/styles.css'
const App = () => (
    <>
        <Header/>
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
