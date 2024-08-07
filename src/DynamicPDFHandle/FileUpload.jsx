import React, { useState } from 'react';

const FileUploadComponent = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const getFileType = (filename) => {
    const extension = filename.split('.').pop().toLowerCase();
    const fileTypes = {
      pdf: 'pdf',
      docx: 'word',
      doc: 'word',
      jpg: 'img',
      jpeg: 'img',
      png: 'img',
    };
    console.log(`File type determined: ${fileTypes[extension]}`);
    return fileTypes[extension] || 'unknown';
  };

  const onSelectFile = (event, index = null) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileType = getFileType(file.name);
    const uploadDocName = file.name.split('.')[0];

    const newFile = {
      uploadDocName,
      fileData: file,
      fileType,
    };

    if (index !== null) {
      console.log(`Updating file at index ${index} with name: ${uploadDocName}`);
      const updatedFiles = [...uploadedFiles];
      updatedFiles[index] = newFile;
      setUploadedFiles(updatedFiles);
    } else {
      console.log(`Adding new file with name: ${uploadDocName}`);
      setUploadedFiles([...uploadedFiles, newFile]);
    }

    console.log('Current uploaded files:', uploadedFiles);
  };

  const uploadFileValidate = (file, index) => {
    if (!file.fileData) {
      console.error('File data is missing. Please upload a document.');
      alert(`Please upload a document.`);
      return;
    }

    const formData = new FormData();
    formData.append('doc', file.fileData);

    console.log(`Validating and uploading file at index ${index} with name: ${file.uploadDocName}`);
    uploadDocument(formData, index, file.uploadDocName);
  };

  const uploadDocument = (formData, index, docName) => {
    console.log('Uploading document:', formData, index, docName);
    // Implement the actual file upload logic here (e.g., sending it to a server)
  };

  const deleteFile = (index) => {
    console.log(`Deleting file at index ${index}`);
    const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(updatedFiles);
    console.log('Current uploaded files after deletion:', updatedFiles);
  };

  return (
    <div className="col-5">
      <div className="d-flex justify-content-between">
        <label>Upload document</label>
        <span className="d-flex align-items-end">
          <small>Formats Allowed: .pdf, .doc, .docx, .jpg, .jpeg, .png</small>
        </span>
      </div>
      <div className="d-flex mt-2 justify-content-between align-items-center">
        <label className="border p-1 rounded uplode-doc-width">
          <label className="d-flex dragDiv drag-drop-width-dc justify-content-between">
            <span id="text1">
              <img src="../../../../assets/images/drag_icon.svg" alt="" />
              <input type="file" onChange={onSelectFile} accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" />
              Drag & drop
            </span>
            <span id="text2">Choose file</span>
          </label>
        </label>
      </div>

      <div className="mt-3">
        <h4>Uploaded Files:</h4>
        <ul>
          {uploadedFiles.map((file, index) => (
            <li key={index} className="d-flex justify-content-between align-items-center">
              <span>
                {file.uploadDocName} ({file.fileType})
              </span>
              <div>
                <input
                  type="file"
                  onChange={(e) => onSelectFile(e, index)}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  style={{ display: 'none' }}
                  id={`updateFile-${index}`}
                />
                <label
                  htmlFor={`updateFile-${index}`}
                  className="btn btn-sm btn-warning mx-2"
                >
                  Update
                </label>
                <button
                  onClick={() => uploadFileValidate(file, index)}
                  className="btn btn-sm btn-primary mx-2"
                >
                  Upload
                </button>
                <button
                  onClick={() => deleteFile(index)}
                  className="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FileUploadComponent;
