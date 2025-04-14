import { useState } from "react";

export default function MissedCallROICalculator() {
  const [avgClientValue, setAvgClientValue] = useState("");
  const [missedCalls, setMissedCalls] = useState("");
  const [closeRate, setCloseRate] = useState("");
  const [roi, setRoi] = useState(null);

  const calculateROI = () => {
    const value = parseFloat(avgClientValue);
    const calls = parseInt(missedCalls);
    const rate = parseFloat(closeRate) / 100;

    if (!isNaN(value) && !isNaN(calls) && !isNaN(rate)) {
      const calculatedROI = value * calls * rate;
      setRoi(calculatedROI);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-xl rounded-2xl">
      <h1 className="text-2xl font-semibold mb-4">Missed Call ROI Calculator</h1>

      <label className="block mb-2">Average Client Value ($):</label>
      <input
        type="number"
        value={avgClientValue}
        onChange={(e) => setAvgClientValue(e.target.value)}
        className="w-full border p-2 mb-4 rounded-lg"
      />

      <label className="block mb-2"># of Missed Calls per Month:</label>
      <input
        type="number"
        value={missedCalls}
        onChange={(e) => setMissedCalls(e.target.value)}
        className="w-full border p-2 mb-4 rounded-lg"
      />

      <label className="block mb-2">Average Close Rate (%):</label>
      <input
        type="number"
        value={closeRate}
        onChange={(e) => setCloseRate(e.target.value)}
        className="w-full border p-2 mb-4 rounded-lg"
      />

      <button
        onClick={calculateROI}
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Calculate ROI
      </button>

      {roi !== null && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
          Estimated ROI: ${roi.toFixed(2)}
        </div>
      )}
    </div>
  );
}

