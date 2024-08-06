import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ChartOfAccount from './components/ChartOfAccount';
import CurrencyCode from './components/CurrencyCode';
import JurnalCode from './components/JurnalCode';
import ProjectCode from './components/ProjectCode';
import InputJurnalTransaksi from './components/JurnalTransaksi/input';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chart-of-account" element={<ChartOfAccount />} />
        <Route path="/currency-code" element={<CurrencyCode />} />
        <Route path="/jurnal-code" element={<JurnalCode />} />
        <Route path="/project-code" element={<ProjectCode />} />
        <Route
          path="/input-jurnal-transaksi"
          element={<InputJurnalTransaksi />}
        />
      </Routes>
    </>
  );
};

export default App;
