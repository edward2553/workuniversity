import React from 'react';
import TableComponent from './TableComponent';
import './App.css';

function App() {
  return (
    <div >
      <header>
        <div className="container-fluid mt-5 ml-5 mr-5 mb-5">
          <div className="row">
            <div className="centrado">
              <h1>Prueba técnica desarrollador junior</h1>
              <div className="row mt-3">
                <div className="col-sm col-md col-lg bordes mr-5">
                  <div className="mt-3">
                    <TableComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
