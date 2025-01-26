export default function MenuMakanan({ menu }) {
  const menuMakanan = menu.filter((item) => item.category === 'makanan');

  return (
    <div className="grid h-screen grid-cols-2 md:grid-cols-3 justify-items-center items-center gap-5 px-5 py-8 md:gap-y-10 md:px-20 md:py-16">
      {menuMakanan.map((product) => (
        <div
          key={product.id}
          className="w-40 md:w-80 h-56 items-center md:h-auto bg-white rounded-2xl shadow-md"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-32 md:h-40 object-cover rounded-t-2xl"
          />
          <div className="px-4 py-2">
            <h2 className="poppins text-sm md:text-lg font-bold">{product.name}</h2>
            <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">{product.description}</p>
            <p className="text-md font-semibold text-orange-600 mt-3">
              {new Intl.NumberFormat('id-ID', { 
                style: 'currency',
                currency: 'IDR',
              }).format(product.price)}
            </p>
            <a
              href={product.goFoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block bg-orange-600 text-white text-sm md:text-base font-semibold py-1 px-3 rounded-md hover:bg-orange-700 transition"
            >
              Pesan di GoFood
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
