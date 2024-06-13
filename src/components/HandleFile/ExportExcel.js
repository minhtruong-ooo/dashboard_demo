import React from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const ExportExcel = ({ data, sheet_name, file_name }) => {
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, sheet_name);
    const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });
    const blob = new Blob([buf], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, file_name);
  };

  return (
    <button className="ml-2 btn btn-success" onClick={exportToExcel}>
      Export Excel
    </button>
  );
};

export default ExportExcel;