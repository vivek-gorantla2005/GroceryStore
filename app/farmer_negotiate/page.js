"use client"
// pages/price-negotiation.js
import { useState } from 'react';

const cropGrowthStages = [
  { stage: 'Seedling', incentive: '5% increase in price' },
  { stage: 'Vegetative', incentive: '10% increase in price' },
  { stage: 'Flowering', incentive: '15% increase in price' },
  { stage: 'Harvest', incentive: '20% increase in price' },
];

const PriceNegotiation = ({ farmerName }) => {
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
      proposedIncentive: '5% increase in price',
      negotiationStatus: 'Incentive Proposed',
      counterOffer: '',
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
      proposedIncentive: '10% increase in price',
      negotiationStatus: 'Incentive Proposed',
      counterOffer: '',
    },
    // More contracts...
  ]);

  const [selectedContract, setSelectedContract] = useState(null);
  const [counterOffer, setCounterOffer] = useState('');

  const handleSelectContract = (contract) => {
    setSelectedContract(contract);
    setCounterOffer('');
  };

  const handleAcceptIncentive = () => {
    if (selectedContract) {
      setContracts((prevContracts) =>
        prevContracts.map((contract) =>
          contract.id === selectedContract.id
            ? { ...contract, negotiationStatus: 'Incentive Accepted' }
            : contract
        )
      );
      setSelectedContract(null);
    }
  };

  const handleRequestCounterOffer = () => {
    if (selectedContract && counterOffer) {
      setContracts((prevContracts) =>
        prevContracts.map((contract) =>
          contract.id === selectedContract.id
            ? { ...contract, counterOffer, negotiationStatus: 'Counter Offer Requested' }
            : contract
        )
      );
      setSelectedContract(null);
      setCounterOffer('');
    }
  };

  const farmerContracts = contracts.filter(contract => contract.farmerName === farmerName);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Price Negotiation for {farmerName}</h1>

      <h2 className="text-2xl font-semibold mb-4">Contracts</h2>
      {farmerContracts.length > 0 ? (
        <ul className="space-y-4">
          {farmerContracts.map((contract) => (
            <li
              key={contract.id}
              className="bg-white p-4 rounded shadow hover:bg-gray-50 transition duration-200"
            >
              <p><strong>Buyer:</strong> {contract.buyerName}</p>
              <p><strong>Buyer Contact:</strong> {contract.buyerDetails}</p>
              <p><strong>Buyer Address:</strong> {contract.buyerAddress}</p>
              <p><strong>Crop:</strong> {contract.crop}</p>
              <p><strong>Crop Quantity:</strong> {contract.cropQuantity}</p>
              <p><strong>Price:</strong> {contract.price}</p>
              <p><strong>Growth Stage:</strong> {contract.growthStage}</p>
              <p><strong>Proposed Incentive:</strong> {contract.proposedIncentive}</p>
              <p><strong>Negotiation Status:</strong> {contract.negotiationStatus}</p>
              <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                onClick={() => handleSelectContract(contract)}
              >
                {contract.negotiationStatus === 'Incentive Proposed' ? 'Accept Incentive' : 'Request Counter Offer'}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No contracts available for {farmerName}.</p>
      )}

      {selectedContract && (
        <div className="mt-8 p-4 bg-white rounded shadow">
          {selectedContract.negotiationStatus === 'Incentive Proposed' ? (
            <>
              <h2 className="text-xl font-semibold mb-2">
                Accept Incentive or Propose Counter Offer for Contract {selectedContract.id}
              </h2>
              <button
                onClick={handleAcceptIncentive}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Accept Incentive
              </button>
              <label className="block mt-4 mb-2">
                Counter Offer:
                <input
                  type="text"
                  value={counterOffer}
                  onChange={(e) => setCounterOffer(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
              </label>
              <button
                onClick={handleRequestCounterOffer}
                className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                Propose Counter Offer
              </button>
            </>
          ) : (
            <p>Counter Offer Requested for Contract {selectedContract.id}</p>
          )}
        </div>
      )}
    </div>
  );
};

// Example usage with Farmer A
export default function Page() {
  return <PriceNegotiation farmerName="Farmer A" />;
}
