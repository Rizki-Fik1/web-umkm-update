import React, { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';
import { adminMenuService } from '../../Service/adminMenuService';

const MenuForm = ({ menu, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: 'makanan',
    image: ''
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [priceDisplay, setPriceDisplay] = useState('');

  const formatRupiah = (value) => {
    const numberString = value.replace(/[^0-9]/g, '');
    const rupiah = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `Rp ${rupiah}`;
  };

  useEffect(() => {
    if (menu) {
      setFormData(menu);
      setImagePreview(menu.image);
      setPriceDisplay(formatRupiah(menu.price.toString()));
    }
  }, [menu]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let savedMenu;
      
      if (menu?.id) {
        // Update existing menu
        savedMenu = await adminMenuService.updateMenu(menu.id, formData);
      } else {
        // Add new menu
        savedMenu = await adminMenuService.addMenu(formData);
      }

      setFormData({ name: '', price: '', description: '', category: 'makanan', image: '' });
      setImagePreview(null);
      onSubmit(savedMenu);
    } catch (error) {
      console.error('Error saat menyimpan data:', error);
      alert('Terjadi kesalahan saat menyimpan data, silakan coba lagi.');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('File harus berupa gambar!');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handlePriceChange = (e) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, '');
    const formattedPrice = formatRupiah(rawValue);
    setFormData({ ...formData, price: rawValue });
    setPriceDisplay(formattedPrice);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">{menu ? 'Edit Menu' : 'Tambah Menu Baru'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div 
          className={`relative border-2 border-dashed rounded-lg p-4 text-center cursor-pointer
            ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
            hover:border-blue-500 transition-colors`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('imageInput').click()}
        >
          <input
            id="imageInput"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagePreview ? (
            <div className="relative">
              <img
                src={imagePreview}
                alt="Preview"
                className="max-h-64 mx-auto rounded-lg"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setImagePreview(null);
                  setFormData({ ...formData, image: '' });
                }}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
              >
                x
              </button>
            </div>
          ) : (
            <div className="py-8">
              <Camera className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">
                Klik atau seret gambar ke sini untuk upload
              </p>
              <p className="text-xs text-gray-400 mt-1">
                PNG, JPG, GIF hingga 5MB
              </p>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Nama Menu</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Kategori</label>
          <select
            className="w-full p-2 border rounded-md"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          >
            <option value="makanan">Makanan</option>
            <option value="minuman">Minuman</option>
            <option value="camilan">Camilan</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Harga</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value={priceDisplay}
            onChange={handlePriceChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Deskripsi</label>
          <textarea
            className="w-full p-2 border rounded-md"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows="3"
          />
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition-colors"
          >
            {menu ? 'Simpan Perubahan' : 'Tambah Menu'}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 rounded-md transition-colors"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
};

export default MenuForm;