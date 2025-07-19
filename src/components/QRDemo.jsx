import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode'; // install via `npm install qrcode`

const QRDemo = ({ onScan }) => {
  const [isScanning, setIsScanning] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Generate QR code when component mounts
    const generateQR = async () => {
      try {
        await QRCode.toCanvas(canvasRef.current, 'https://your-restaurant.com/menu', {
          width: 192,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          },
          errorCorrectionLevel: 'H'
        });
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };

    generateQR();
  }, []);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      onScan?.();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-50 to-white z-50 flex flex-col items-center justify-center px-6 py-10">
      
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">Scan to View Menu</h1>
        <p className="text-gray-600 text-lg">Welcome to <span className="font-semibold text-orange-500">Mama's Kitchen</span></p>
      </header>
      
      {/* QR Card */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 mb-6 w-full max-w-sm flex flex-col items-center">
        <canvas ref={canvasRef} className="max-w-full h-auto" />
        <div className="mt-4 text-center">
          <h2 className="text-xl font-bold text-gray-800">Table 5 - Victoria Island</h2>
          <p className="text-sm text-gray-500">📍 Lagos • ⭐ 4.8 (1,200+ reviews)</p>
        </div>
      </div>
      
      {/* Button */}
      <button
        onClick={handleScan}
        disabled={isScanning}
        className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-8 py-3 rounded-xl font-medium shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-lg flex items-center gap-2"
      >
        📱 {isScanning ? 'Scanning...' : 'Scan QR'}
      </button>
      
      {/* Scan Animation */}
      {isScanning && (
        <div className="mt-4 flex flex-col items-center animate-fadeIn">
          <div className="animate-ping h-4 w-4 bg-orange-500 rounded-full mb-2"></div>
          <p className="text-sm text-gray-500">Launching Smart Menu...</p>
        </div>
      )}
      
      {/* Footer Note */}
      <footer className="mt-8 text-center text-sm text-gray-500 max-w-md">
        <p>🎯 <strong>Pro Tip:</strong> Place this QR code on table stands, printed flyers, or digital displays for instant smart menu access.</p>
      </footer>
    </div>
  );
};

export default QRDemo;