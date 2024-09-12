"use client";
import React, { useState, useEffect } from 'react';
import Pagination from '../_components/Pagination'; // Update path as needed

const Page = () => {
  const [farmerDataList, setFarmerDataList] = useState([]);

  useEffect(() => {
    // Simulate fetching data or generating data only on the client side
    const fetchData = () => {
      const data = Array.from({ length: 10 }, (_, index) => ({
        name: `Farmer ${index + 1}`,
        rating: (Math.random() * 5).toFixed(1), // Random rating between 0 and 5
        image: `https://via.placeholder.com/150?text=Farmer+${index + 1}`, // Placeholder image
        crops: [
          { name: "Tomatoes", quantity: `${Math.floor(Math.random() * 200) + 50} kg`, harvestDate: "2024-09-15", image: "https://via.placeholder.com/100?text=Tomatoes" },
          { name: "Corn", quantity: `${Math.floor(Math.random() * 200) + 50} kg`, harvestDate: "2024-09-20", image: "https://via.placeholder.com/100?text=Corn" },
          { name: "Potatoes", quantity: `${Math.floor(Math.random() * 200) + 50} kg`, harvestDate: "2024-09-30", image: "https://via.placeholder.com/100?text=Potatoes" },
        ],
        location: {
          city: "City",
          state: "State",
          country: "Country",
          coordinates: { latitude: 39.7817, longitude: -89.6501 },
        },
        contact: {
          phone: `555-${1000 + index}`,
          email: `farmer${index + 1}@example.com`,
        },
      }));
      setFarmerDataList(data);
    };

    fetchData();
  }, []);

  const profilesPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(farmerDataList.length / profilesPerPage);

  const currentProfiles = farmerDataList.slice(
    (currentPage - 1) * profilesPerPage,
    currentPage * profilesPerPage
  );

  return (
    <div style={styles.pageContainer}>
      <h1>Farmer Marketplace</h1>
      {currentProfiles.map((farmer, index) => (
        <div key={index} style={styles.profileCard}>
          <div style={styles.profileHeader}>
            <img src={farmer.image} alt={`${farmer.name}'s profile`} style={styles.farmerImage} />
            <div style={styles.profileInfo}>
              <h2>{farmer.name}</h2>
              <p>Rating: {Array.from({ length: 5 }, (_, i) => (
                <span key={i} style={{ color: i < Math.round(farmer.rating) ? '#FFD700' : '#D3D3D3' }}>★</span>
              ))} ({farmer.rating}/5)</p>
            </div>
          </div>
          <div style={styles.cropsContainer}>
            <h3>Crops Details</h3>
            <ul style={styles.cropsList}>
              {farmer.crops.map((crop, index) => (
                <li key={index} style={styles.cropItem}>
                  <img src={crop.image} alt={`${crop.name}`} style={styles.cropImage} />
                  <div style={styles.cropDetails}>
                    <strong>{crop.name}</strong>: {crop.quantity} (Harvest Date: {crop.harvestDate})
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div style={styles.locationContainer}>
            <h3>Location</h3>
            <p>{farmer.location.city}, {farmer.location.state}, {farmer.location.country}</p>
            <p>Coordinates: {farmer.location.coordinates.latitude}, {farmer.location.coordinates.longitude}</p>
          </div>
          <div style={styles.contactContainer}>
            <h3>Contact Information</h3>
            <p>Phone: {farmer.contact.phone}</p>
            <p>Email: <a href={`mailto:${farmer.contact.email}`}>{farmer.contact.email}</a></p>
          </div>
        </div>
      ))}
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={pageNumber => setCurrentPage(pageNumber)}
      />
    </div>
  );
};

const styles = {
  pageContainer: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  profileCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
  },
  profileHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  farmerImage: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    marginRight: '20px',
  },
  profileInfo: {
    flex: 1,
  },
  cropsContainer: {
    marginTop: '20px',
  },
  cropsList: {
    listStyleType: 'none',
    padding: 0,
  },
  cropItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  cropImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginRight: '10px',
  },
  cropDetails: {
    marginLeft: '10px',
  },
  locationContainer: {
    marginTop: '20px',
  },
  contactContainer: {
    marginTop: '20px',
  },
};

export default Page;
