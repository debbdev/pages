import React,{useState} from 'react';
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
 
function BarcodeScanner() {
 
  const [ data, setData ] = useState('');
 
  return (
    <>
          <BarcodeScannerComponent
        width={400}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text)
          else setData('')
        }}
      />
      <p>{data}</p>
    </>
  )
}
 
export default BarcodeScanner;