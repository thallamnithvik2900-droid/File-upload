import React from "react";
import ImageUpload from "./components/ImageUpload";

function App() {

  const handleUpload = async (formData) => {
    try {
      const res = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("Uploaded:", data);

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2 style={{ padding: "20px" }}>Now,You can upload whatEver you Want.....</h2>
      <ImageUpload onUpload={handleUpload} />
    </div>
  );
}

export default App;