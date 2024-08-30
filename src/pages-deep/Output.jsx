// Output.jsx
import React, { useState } from 'react';

const Output = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    seller: '',
    model: '',
  });

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Replace with your actual API endpoint
      const response = await fetch('https://api.example.com/data', {
        method: 'POST', // or 'GET' based on your API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Input Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">
            Item Name
          </label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter item name"
          />
        </div>

        <div>
          <label htmlFor="seller" className="block text-sm font-medium text-gray-700">
            Seller
          </label>
          <input
            type="text"
            id="seller"
            name="seller"
            value={formData.seller}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter seller name"
          />
        </div>

        <div>
          <label htmlFor="model" className="block text-sm font-medium text-gray-700">
            Model
          </label>
          <input
            type="text"
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter model"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>

      {/* Loading Indicator */}
      {loading && <p className="mt-4 text-gray-500">Loading...</p>}

      {/* Error Message */}
      {error && <p className="mt-4 text-red-500">Error: {error}</p>}

      {/* Data Table */}
      {data.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Results</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  {/* Adjust table headers based on your API response */}
                  <th className="py-2 px-4 border-b">ID</th>
                  <th className="py-2 px-4 border-b">Item Name</th>
                  <th className="py-2 px-4 border-b">Seller</th>
                  <th className="py-2 px-4 border-b">Model</th>
                  {/* Add more headers as needed */}
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b">{item.id}</td>
                    <td className="py-2 px-4 border-b">{item.itemName}</td>
                    <td className="py-2 px-4 border-b">{item.seller}</td>
                    <td className="py-2 px-4 border-b">{item.model}</td>
                    {/* Add more cells as needed */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Output;
