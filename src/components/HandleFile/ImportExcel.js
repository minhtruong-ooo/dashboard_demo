import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ImportExcel = ({ setData }) => {
    const ImportExcelFile = (e) => {
        const reader = new FileReader();

        reader.readAsBinaryString(e.target.files[0]);
        reader.onload = (e) => {
            const data = e.target.result;
            const wb = XLSX.read(data, { type: "binary" });
            const sheetName = wb.SheetNames[0];
            const sheet = wb.Sheets[sheetName];
            const parsedData = XLSX.utils.sheet_to_json(sheet);
            setData(parsedData);
        }
    };

    return (
        <input accept=".xlsx, .xls" onChange={ImportExcelFile} className="form-control pt-1 pb-1" type="file" id="formFile"></input>
    );
};

export default ImportExcel;