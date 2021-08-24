import React from "react";
import QrReader from "react-qr-reader";

export const Qrreader = () => {
  const [result, setResult] = React.useState("No result");

  const handleScan = data => {
    if (data) {
      setResult(data);
    }
  };
  sessionStorage.setItem("soietyQr",JSON.stringify(result))
  console.log(result)
  const handleError = err => {
    console.error(err);
  };
  return (
    <div>
      <QrReader delay={300} onError={handleError} onScan={handleScan} style={{ width: "30%",height: "30%",margin: "50px auto"}} />
      <p>{result}</p>
    </div>
  );
};
