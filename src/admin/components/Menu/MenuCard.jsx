import React from 'react';
import PropTypes from 'prop-types';

const MenuCard = ({ menu, onEdit, onDelete }) => {
  return (
    <div className="w-40 md:w-80 h-auto bg-white rounded-2xl shadow-md">
      <img 
        src={menu.image || "/api/placeholder/300/200"} 
        alt={menu.name} 
        className="w-full md:h-36 object-cover rounded-t-2xl"
      />
      <div className="px-4 py-2">
        <div className="mb-4">
          <h2 className="poppins text-sm md:text-lg font-bold truncate">
            {menu.name}
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2 line-clamp-2">
            {menu.description}
          </p>
          <p className="text-md font-semibold text-orange-600 mt-3">
            Rp {menu.price.toLocaleString()}
          </p>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(menu)}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md transition-colors text-xs md:text-sm"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(menu.id)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md transition-colors text-xs md:text-sm"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

MenuCard.propTypes = {
    menu: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string
    }).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };

export default MenuCard;