import '../../../AddItem.css';

export default function MenuCamilan({ menu }) {

  const menuCamilan = menu.filter((item) => item.category === 'camilan');

  return (
    <div className="grid h-screen grid-cols-2 md:grid-cols-3 justify-items-center items-center pt-10 gap-5 px-5 py-8">
      {menuCamilan.map((product) => (
        <div
          key={product.id}
          className="w-40 md:w-80 h-56 md:h-auto items-center bg-white rounded-2xl shadow-md"
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
          </div>
        </div>
      ))}
    </div>
  );
}
