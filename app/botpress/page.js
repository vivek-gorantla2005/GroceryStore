import React from 'react';

const Page = () => {
  const handleOpen = () => {
    if (typeof botpress !== 'undefined') {
      botpress.open();
    }
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}
      >
        Open
      </button>
    </div>
  );
};

export default Page;
