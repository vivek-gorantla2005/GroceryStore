import React from 'react';
import Link from 'next/link';
const Categories = () => {
  return (<>
  <Link href={"/products"}>
    <p className='ml-16 mt-4   text-2xl font-extrabold text-green-800'>Shop By Categories</p>
  </Link>

    <div className="categories flex justify-center">
      <ul className='flex gap-24'>
        <li className='flex items-center gap-2 font-bold  rounded-lg transition-transform transform  pr-4 hover:scale-105 hover:shadow-2xl hover:text-gray-900 hover:opacity-90'>
          Fruits <img src="fruits.png" alt="fruits" width={70} height={50} />
        </li>
        <li className='flex items-center gap-2 font-bold  rounded-lg transition-transform transform pl-4 pr-4 hover:scale-105 hover:shadow-2xl hover:text-gray-900 hover:opacity-90'>
          Vegetables <img src="vegetables.jpg" alt="vegetables" width={70} height={50} />
        </li>
        <li className='flex items-center gap-2 font-bold  rounded-lg transition-transform transformpl-4 pr-4 hover:scale-105 hover:shadow-2xl hover:text-gray-900 hover:opacity-90'>
          Beverages <img src="drink.jpg" alt="beverages" width={70} height={50} />
        </li>
        <li className='flex items-center gap-2 font-bold  rounded-lg transition-transform pl-4 pr-4 transform hover:scale-105 hover:shadow-2xl hover:text-gray-900 hover:opacity-90'>
          Bakery <img src="bread.jpg" alt="bakery" width={70} height={50} />
        </li>
        <li className='flex items-center gap-2 font-bold bg-custom-green rounded-lg pl-4 pr-4  transition-transform transform hover:scale-105 hover:shadow-2xl hover:text-gray-900 hover:opacity-90'>
          Dairy <img src="dairy.png" alt="dairy" width={70} height={40} />
        </li>
      </ul>
    </div>
  </>
  );
};

export default Categories;
