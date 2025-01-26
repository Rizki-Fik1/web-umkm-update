import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import MenuCard from '../components/Menu/MenuCard';
import MenuForm from '../components/Menu/MenuForm';
import { adminMenuService } from '../service/adminMenuService';

const AdminMenu = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editMenu, setEditMenu] = useState(null);

  useEffect(() => { 
    const fetchMenus = async () => {
      try {
        const fetchedMenus = await adminMenuService.getMenus();
        setMenus(fetchedMenus);
      } catch (error) {
        console.error("Error fetching menus:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenus();
  }, []);

  if (loading) {
    return <div className='text-center text-2xl'>Loading...</div>;
  }

  const groupMenusByCategory = () => {
    return menus.reduce((grouped, menu) => {
      if (!grouped[menu.category]) {
        grouped[menu.category] = [];
      }
      grouped[menu.category].push(menu);
      return grouped;
    }, {});
  };

  const handleAddMenu = (newMenu) => {
    setMenus([...menus, { id: Date.now(), ...newMenu }]);
    setShowForm(false);
  };

  const handleUpdateMenu = (updatedMenu) => {
    setMenus(menus.map((menu) =>
      menu.id === updatedMenu.id ? updatedMenu : menu
    ));
    setEditMenu(null);
    setShowForm(false);
  };

  const handleDeleteMenu = async (id) => {
    if (window.confirm("Yakin ingin menghapus menu ini?")) {
      try {
        await adminMenuService.deleteMenu(id);
        setMenus(menus.filter((menu) => menu.id !== id));
      } catch (error) {
        console.error("Error deleting menu:", error);
      }
    }
  };

  const handleEdit = (menu) => {
    setEditMenu(menu);
    setShowForm(true);
  };

  const groupedMenus = groupMenusByCategory();
  const categories = {
    makanan: "Makanan",
    minuman: "Minuman",
    camilan: "Camilan"
  };

  return (
    <div className="flex h-screen">
      <div className="h-screen bg-[#FFFBD3]">
        <Sidebar />
      </div>
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-800">Kelola Menu</h1>
            {!showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors"
              >
                Tambah Menu Baru
              </button>
            )}
          </div>
  
          {showForm ? (
            <div className="mb-6">
              <MenuForm
                menu={editMenu}
                onSubmit={editMenu ? handleUpdateMenu : handleAddMenu}
                onCancel={() => {
                  setShowForm(false);
                  setEditMenu(null);
                }}
              />
            </div>
          ) : (
            <div className="space-y-16">
              {Object.entries(categories).map(([categoryKey, categoryName]) => (
                <div
                  key={categoryKey}
                  className="p-6 rounded-lg shadow-md"
                  style={{
                    backgroundColor: '#FFFBD3',
                    border: '1px solid #FFD700',
                  }}
                >
                  <div className="flex items-center mb-6">
                    <h2
                      className="text-2xl font-semibold"
                      style={{
                        color: '#B8860B',
                      }}
                    >
                      {categoryName}
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
                    {groupedMenus[categoryKey]?.map((menu) => (
                      <MenuCard
                        key={menu.id}
                        menu={menu}
                        onEdit={handleEdit}
                        onDelete={handleDeleteMenu}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );  
};

export default AdminMenu;
