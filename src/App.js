import React, { useState } from "react";
import "./App.css";
import PDFFile from "./PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";


function App() {

  return (
    <div className="App">
      DOWNLOAD PDF
      <PDFDownloadLink document={<PDFFile />} filename="FORM">
      {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
      </PDFDownloadLink>
    </div>
  );
}

export default App;
