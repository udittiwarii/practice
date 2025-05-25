import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Wapper from './Wapper.jsx';

createRoot(document.getElementById('root')).render(<Wapper>
    <>
        <App />
        <ToastContainer
            position="top-center" />
    </>

</Wapper>)

