import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("green");
  const [colorType, setColorType] = useState("RGB");
  const [selectedButton, setSelectedButton] = useState("None");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  const randomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    return hexColor;
  };

  const randomRGBColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white gap-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <button
            className="border border-white p-3 rounded"
            onClick={() => {
              setSelectedButton("RGB Color");
              setColorType("RGB");
              setColor(randomRGBColor());
            }}
          >
            RGB Color
          </button>
          <button
            className="border border-white p-3 rounded"
            onClick={() => {
              setSelectedButton("HEX Color");
              setColorType("HEX");
              setColor(randomHexColor());
            }}
          >
            HEX Color
          </button>
          <button
            className="border border-white p-3 rounded"
            onClick={() => {
              const useRgb = Boolean(Math.floor(Math.random() * 2));
              setSelectedButton("Random Color");
              if (useRgb) {
                setColorType("RGB");
                setColor(randomRGBColor());
              } else {
                setColorType("HEX");
                setColor(randomHexColor());
              }
            }}
          >
            Random Color
          </button>
        </div>
        <h1 className="text-2xl font-semibold">
          {selectedButton === "None" ? "None" : `${selectedButton} ${color} ${colorType}`}
        </h1>
      </div>
    </div>
  );
}

export default App;
