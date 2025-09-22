import React from 'react';
import Map from './components/Map'; // Make sure path is correct
import Report from './components/Report';

function App() {
  return (
    <>
      <div style={{ width: '100%', height: '100vh' }}>
        <Map />
        {/* <Report /> */}
      </div>
    </>
  );
}

export default App;
