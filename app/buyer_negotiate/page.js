"use client"
// pages/buyer-negotiation.js
import { useState } from 'react';

const cropGrowthStages = [
  { stage: 'Seedling', incentive: '5% increase in price' },
  { stage: 'Vegetative', incentive: '10% increase in price' },
  { stage: 'Flowering', incentive: '15% increase in price' },
  { stage: 'Harvest', incentive: '20% increase in price' },
];

const BuyerNegotiation = ({ buyerName }) => {
  const [contracts, setContracts] = useState([
    {
      id: 1,
      farmerName: 'Farmer A',
      buyerName: 'Buyer A',
      crop: 'Wheat',
      cropQuantity: '500 kg',
      price: '1000',
      growthStage: 'Seedling',
      buyerDetails: 'Buyer A Contact: +123456789',
      buyerAddress: '123 Farm Road, Town A',
      negotiationStatus: 'Pending',
    },
    {
      id: 2,
      farmerName: 'Farmer A',
      buyerName: 'Buyer C',
      crop: 'Corn',
      cropQuantity: '300 kg',
      price: '1500',
      growthStage: 'Vegetative',
      buyerDetails: 'Buyer C Contact: +987654123',
      buyerAddress: '456 Grain Street, Town C',
      negotiationStatus: 'Pending',
    },
    // More contracts...
  ]);

  const [selectedContract, setSelectedContract] = useState(null);
  const [incentive, setIncentive] = useState('');

  const handleSelectContract = (contract) => {
    setSelectedContract(contract);
    setIncentive('');
  };

  const handleProposeIncentive = () => {
    if (selectedContract && incentive) {
      setContracts((prevContracts) =>
        prevContracts.map((contract) =>
          contract.id === selectedContract.id
            ? { ...contract, incentive, negotiationStatus: 'Incentive Proposed' }
            : contract
        )
      );
      setSelectedContract(null);
      setIncentive('');
    }
  };

  const buyerContracts = contracts.filter(contract => contract.buyerName === buyerName);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Buyer Negotiation for {buyerName}</h1>

      <h2 className="text-2xl font-semibold mb-4">Contracts</h2>
      {buyerContracts.length > 0 ? (
        <ul className="space-y-4">
          {buyerContracts.map((contract) => (
            <li
              key={contract.id}
              className="bg-white p-4 rounded shadow hover:bg-gray-50 transition duration-200"
            >
              <p><strong>Farmer:</strong> {contract.farmerName}</p>
              <p><strong>Crop:</strong> {contract.crop}</p>
              <p><strong>Crop Quantity:</strong> {contract.cropQuantity}</p>
              <p><strong>Price:</strong> {contract.price}</p>
              <p><strong>Growth Stage:</strong> {contract.growthStage}</p>
              <p><strong>Buyer Contact:</strong> {contract.buyerDetails}</p>
              <p><strong>Buyer Address:</strong> {contract.buyerAddress}</p>
              <p><strong>Negotiation Status:</strong> {contract.negotiationStatus}</p>
              <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                onClick={() => handleSelectContract(contract)}
              >
                Propose Incentive
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No contracts available for {buyerName}.</p>
      )}

      {selectedContract && (
        <div className="mt-8 p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">
            Propose Incentive for Contract {selectedContract.id}
          </h2>
          <label className="block mb-2">
            Select Growth Stage:
            <select
              value={incentive}
              onChange={(e) => setIncentive(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select stage...</option>
              {cropGrowthStages.map((stage) => (
                <option key={stage.stage} value={stage.incentive}>
                  {stage.stage} - {stage.incentive}
                </option>
              ))}
            </select>
          </label>
          <button
            onClick={handleProposeIncentive}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Submit Incentive
          </button>
        </div>
      )}
    </div>
  );
};

// Example usage with Buyer A
export default function Page() {
  return <BuyerNegotiation buyerName="Buyer A" />;
}
