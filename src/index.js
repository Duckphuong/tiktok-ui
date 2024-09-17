import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '~/App';
import Todo from './todo';
import App1 from './useImperativehandle';
import GlobalStyles from './component/GlobalStyles';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './ThemeContext';
import { StoreProvider } from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));

function emitComment(id) {
    setInterval(() => {
        window.dispatchEvent(
            new CustomEvent(`lesson-${id}`, {
                detail: `Noi dung comment cua lesson-${id}`,
            })
        );
    }, 2000);
}

emitComment(1);
emitComment(2);
emitComment(3);

root.render(
    // <React.StrictMode>

    // <ThemeProvider>
    //     <App />
    // </ThemeProvider>
    // <StoreProvider>
    //     <Todo />
    // </StoreProvider>
    // <App1 />
    // </React.StrictMode>

    <GlobalStyles>
        <App />
    </GlobalStyles>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
