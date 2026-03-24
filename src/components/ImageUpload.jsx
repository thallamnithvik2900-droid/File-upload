import React, { useState } from "react";

function ImageUpload() {
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImages]);
  };

  return (
    <div style={{ padding: "20px" }}>

      <input type="file" multiple onChange={handleChange} />

      {/* 🔥 Small Image Preview */}
      <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img.preview}
            alt="preview"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              borderRadius: "10px",   // 👈 like chat stjrkedneyle
              border: "1px solid #ccc"
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageUpload;