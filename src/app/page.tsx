import Image from 'next/image';

// Child Component
const CarCard = ({ car }: { car: { carImage: string; carName: string; carPrice: string; carReviews: string } }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
      <Image src={car.carImage} alt={car.carName} width={200} height={150} className="rounded-md" />
      <h2 className="text-lg font-bold mt-2">{car.carName}</h2>
      <p className="text-gray-600 mt-1">{car.carPrice}</p>
      <p className="text-gray-500 text-sm mt-1">{car.carReviews} reviews</p>
    </div>
  );
};

export default function Home() {
  // Array of Car Objects
  const cars = [
    {
      carImage: '/crv.png',
      carName: 'Tesla Model S',
      carPrice: '$80000',
      carReviews: '150',
    },
    {
      carImage: '/crv1.png',
      carName: 'Ford Mustang',
      carPrice: '$55000',
      carReviews: '120',
    },
    {
      carImage: '/Rush.png',
      carName: 'Chevrolet Camaro',
      carPrice: '$60000',
      carReviews: '100',
    },
    {
      carImage: '/terios.png',
      carName: 'BMW M3',
      carPrice: '$70000',
      carReviews: '200',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row w-full h-screen">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-start bg-gray-100 p-8 md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Store
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Discover the best products at unbeatable prices.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition duration-300">
            Shop Now
          </button>
        </div>

        {/* Right Section */}
        <div className="relative w-full md:w-1/2 h-96 md:h-full bg-gray-300">
          <Image
            src="/image 8.png"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>

      {/* Car Section */}
      <div className="bg-gray-100 p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
}