import '../../../AddItem.css';

export default function MenuCamilan({ menu }) {

  const menuCamilan = menu.filter((item) => item.category === 'camilan');

  return (
    <div className="grid grid-cols-1 justify-items-center items-center pt-10">
      {menuCamilan.map((product) => (
        <div
          key={product.id}
          className="w-40 md:w-80 h-52 md:h-auto bg-white rounded-2xl shadow-md"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:h-36 object-cover rounded-t-2xl"
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
