import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BookingPage from './BookingPage';
import EnquiryPage from './EnquiryPage';
import PropertyPage from './PropertyPage';
import ResultPage from './ResultPage';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<PropertyPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/enquiry" element={<EnquiryPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
