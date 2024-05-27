import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import 'remixicon/fonts/remixicon.css'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <ToastContainer
      theme="dark"
      position="top-center"
      autoClose={2000}
      closeOnClick
      pauseOnHover={false}
    />
    <App />
  </BrowserRouter>
);