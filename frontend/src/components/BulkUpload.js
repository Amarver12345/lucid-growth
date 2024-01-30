// components/BulkUpload.js
import React, { useState } from 'react';
import Papa from 'papaparse';

const BulkUpload = ({ handleBulkUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          handleBulkUpload(result.data);
          setFile(null);
        },
        header: true,
      });
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default BulkUpload;
