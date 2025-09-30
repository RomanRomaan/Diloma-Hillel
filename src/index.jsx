import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App"
import { HashRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// Import store from ".redux/store";
import "./styles.css"

const rootEl = document.getElementById('main');
const root = ReactDOM.createRoot(rootEl);

// root.render(<HashRouter>
//     <Provider store={store}>
//         <App />
//     </Provider>
// </HashRouter>)
root.render(<HashRouter>
    <App />

</HashRouter>)