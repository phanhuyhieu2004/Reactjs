import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
// ReactDOM.createRoot() là một phương thức trong React để tạo một gốc render mới.

const root = ReactDOM.createRoot(document.getElementById('root'));
// là cách để lấy một phần tử trong DOM có id là 'root', nơi mà ứng dụng React sẽ được render vào.
// là một biến để lưu trữ gốc render, sau đó bạn có thể sử dụng biến này để render các thành phần
// render() là phương thức của gốc render, dùng để render các thành phần của ứng dụng React vào DOM.
root.render(
    <BrowserRouter>    <App />
  </BrowserRouter>
// <BrowserRouter> là một thành phần của React Router, dùng để quản lý định tuyến của ứng dụng dựa trên URL.
);


reportWebVitals();
