import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
// tạo 1 phần tử gốc để hiển thị ứng dụng bằng cách chọn 1 phần tử có id root trong file gốc để gán cho biến root
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// Hiển thị ứng dụng React bên trong phần tử gốc. Nó bọc thành phần App với thành phần BrowserRouter. Điều này cho phép chức năng định tuyến trong ứng dụng, cho phép các thành phần khác nhau được hiển thị dựa trên URL.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
