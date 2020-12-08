import React from 'react';
import Calculator from './containers/calculator'
import './index.css'
import './app.css';

export function App() {
    return(
        <div className="screen">
            <div className={"div-superior"}/>
            <Calculator/>
            <div className={"div-inferior"}/>
        </div>
    )
}