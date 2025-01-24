import '../../../AddItem.css';

export default function MenuMinuman({ menu }) {
  const menuMinuman = menu.filter((item) => item.category === 'minuman');

  return (
    <div className="grid h-screen grid-cols-2 md:grid-cols-3 justify-items-center items-center px-5 py-8 gap-5 md:gap-y-14 md:px-20 md:py-16">
      {menuMinuman.map((product) => (
        <div
          key={product.id}
          className="w-40 md:w-80 h-60 items-center md:h-auto bg-white rounded-2xl shadow-md"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-36 md:h-48 object-cover rounded-t-2xl"
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
          </div>
        </div>
      ))}
    </div>
  );
}
