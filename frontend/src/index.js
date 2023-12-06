import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import store from './store'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import Login from './Components/Login';
import Register from './Components/Register';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Provider store={store}>
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<App />} />
  //       <Route path='/login' element={<Login/>}/>
  //       <Route path='/register' element={<Register/>}/>
  //     </Routes>
  //   </Router>
  //   </Provider>
  // </React.StrictMode>
  // <React.StrictMode>
  //   <Provider store={store}>
  //     <Router>
  //       <Routes>
  //         <Route path="/" element={<App />} />
  //         <Route path="/login" element={<Login />} />
  //         <Route path="/register" element={<Register />} />
  //       </Routes>
  //     </Router>
  //     <ReactQueryDevtools />
  //   </Provider>
  // </React.StrictMode>
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

