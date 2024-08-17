import React from'react';
import Categories from './_components/Categories';
import PopularProducts from './_components/PopularProducts';
import Slider from './_components/Slider';
export default function Home() {
  return (
  <>
  <Categories/>
  <Slider/>
  <PopularProducts/>
  </>
  );
}
