import React, { useState, useRef } from "react";

const Example = () => {
  const [image, setImage] = useState("existing_value.jpg");
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setImage(selectedFile);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        className="form-control"
        id="image"
        name="image"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleImageChange}
      />
      <input
        type="text"
        className="form-control"
        value={image.name} // Display the file name as the value
        readOnly
      />
      <button onClick={handleButtonClick}>Choose File</button>
    </div>
  );
};

export default Example;
