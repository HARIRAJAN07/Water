import React from 'react';
import jsPDF from 'jspdf';

const Report = () => {

  const generatePDF = () => {
    const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4' });

    // Title
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text("Smart Groundwater Quality Report", 105, 20, null, null, 'center');

    // Static data for metals and parameters
    const waterData = [
      { parameter: "Arsenic (As)", value: "0.01 mg/L" },
      { parameter: "Lead (Pb)", value: "0.005 mg/L" },
      { parameter: "Mercury (Hg)", value: "0.001 mg/L" },
      { parameter: "Cadmium (Cd)", value: "0.002 mg/L" },
      { parameter: "Chromium (Cr)", value: "0.05 mg/L" },
      { parameter: "Nickel (Ni)", value: "0.02 mg/L" },
      { parameter: "Copper (Cu)", value: "0.03 mg/L" },
      { parameter: "Zinc (Zn)", value: "0.1 mg/L" },
      { parameter: "Iron (Fe)", value: "0.3 mg/L" },
      { parameter: "Manganese (Mn)", value: "0.1 mg/L" },
      { parameter: "pH", value: "7.2" },
      { parameter: "Turbidity", value: "1 NTU" },
      { parameter: "Hardness", value: "150 mg/L" },
    ];

    // Table headers
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text("Parameter", 30, 40);
    doc.text("Value", 150, 40);

    doc.setFont('helvetica', 'normal');
    let y = 50;
    waterData.forEach(item => {
      doc.text(item.parameter, 30, y);
      doc.text(item.value, 150, y);
      y += 10;
    });

    // HMPI and classification
    const HMPI = 1.85; // static value
    const classification = "Safe to Drink";

    y += 10;
    doc.setFont('helvetica', 'bold');
    doc.text(`HMPI Value: ${HMPI}`, 30, y);
    y += 10;
    doc.text(`Water Safety: ${classification}`, 30, y);

    // Side effects button info (simulated as text)
    y += 15;
    doc.setFont('helvetica', 'normal');
    doc.text("Click the button in the app to see side effects of unsafe water.", 30, y);

    // Save PDF
    doc.save("Groundwater_Report.pdf");
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  };

  const buttonStyle = {
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  };

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={generatePDF}>
        Generate Groundwater Report
      </button>
    </div>
  );
}

export default Report;
