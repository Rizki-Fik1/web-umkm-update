// services/adminMenuService.js
import { 
    collection, 
    getDocs, 
    doc, 
    addDoc,
    setDoc, 
    deleteDoc,
    Timestamp 
  } from "firebase/firestore";
  import { db } from "../../firebaseConfig";
  
  export const adminMenuService = {
    // Fetch semua menu
    getMenus: async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "menu"));
        return querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      } catch (error) {
        throw new Error(`Error fetching menus: ${error.message}`);
      }
    },
  
    // Add menu baru
    addMenu: async (formData) => {
      try {
        // Validasi input
        if (!formData.name || !formData.price || !formData.description || !formData.category) {
          throw new Error('Mohon isi semua data menu!');
        }
  
        const menuData = {
          ...formData,
          price: parseInt(formData.price, 10),
          time: Timestamp.now()
        };
  
        const docRef = await addDoc(collection(db, "menu"), menuData);
        return {
          id: docRef.id,
          ...menuData
        };
      } catch (error) {
        throw new Error(`Error menambah menu: ${error.message}`);
      }
    },
  
    // Update existing menu
    updateMenu: async (menuId, formData) => {
      try {
        if (!menuId) throw new Error('Menu ID diperlukan untuk update');
  
        // Validasi input
        if (!formData.name || !formData.price || !formData.description || !formData.category) {
          throw new Error('Mohon isi semua data menu!');
        }
  
        const menuData = {
          ...formData,
          price: parseInt(formData.price, 10),
          time: Timestamp.now()
        };
  
        await setDoc(doc(db, "menu", menuId), menuData);
        return {
          id: menuId,
          ...menuData
        };
      } catch (error) {
        throw new Error(`Error mengupdate menu: ${error.message}`);
      }
    },
  
    // Delete menu
    deleteMenu: async (id) => {
      try {
        if (!id) throw new Error('Menu ID diperlukan untuk delete');
        await deleteDoc(doc(db, "menu", id));
        return true;
      } catch (error) {
        throw new Error(`Error menghapus menu: ${error.message}`);
      }
    }
  };