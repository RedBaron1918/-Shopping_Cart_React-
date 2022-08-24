import App from "./App";
import {createRoot} from 'react-dom/client';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import CartState from "./context/cart/CartState";
const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
         <CartState>
         <App />
        </CartState>
    </BrowserRouter>
);