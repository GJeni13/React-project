// src/pages/HomePage.jsx
import Carousel from '../components/Carousel';

const HomePage = () => {
  // Image URLs for the carousel
  const images = [
    'src/shopping.jpg',
    'src/pexels.webp',
    'src/homewelcome.webp',
    'src/isto.jpg',
    'src/istockphoto.jpg',
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="font-bold text-8xl md:text-7xl text-center gradient-text" style={{ fontFamily: 'Lobster' }}>Welcome to Our Shopping Platform</h1>
      <Carousel images={images} />
      <div className="mt-8 text-center">
        <p className="text-2xl" style={{ fontFamily: 'Lobster' }}>
          "The best time to shop is now. Explore our collection of top-notch products that fit every need and style!"
        </p>
        <p className="text-xl mt-4" style={{ fontFamily: 'Lobster' }}>"Shopping is not just buying goods, it's creating moments of joy!"</p>
      </div>
    </div>
  );
};

export default HomePage;
