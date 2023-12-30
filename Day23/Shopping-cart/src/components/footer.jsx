import React from 'react';
import '/src/App.css';  
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid container-fluid-footer p-0">
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2023 Delintes. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
