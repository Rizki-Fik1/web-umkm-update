import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import BodyMenuFour from "../components/Menupage/BodyMenuFour";
import BodyMenuOne from "../components/Menupage/BodyMenuOne";
import BodyMenuThree from "../components/Menupage/BodyMenuThree";
import BodyMenuTwo from "../components/Menupage/BodyMenuTwo";
import HeaderMenu from "../components/Menupage/HeaderMenu";
import MenuCamilan from "../components/Menupage/MenuCamilan";
import MenuMakanan from "../components/Menupage/MenuMakanan";
import MenuMinuman from "../components/Menupage/MenuMinuman";
import FooterFix from "../../contents/FooterFix";
import NavbarMenu from "../../contents/NavbarMenu";

export default function MenuPages() {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "menu"));
        const fetchedMenus = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMenus(fetchedMenus);
      } catch (error) {
        console.error("Error fetching menus:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenus();
  }, []);

  return (
    <>
      <div className="bg-orange-500 h-screen overflow-hidden flex flex-col">
        <NavbarMenu/>
        <HeaderMenu />
      </div>

      <div className="bg-white">
        <BodyMenuOne/>
      </div>

      <div className="bg-white pb-32 md:pb-12">
        <BodyMenuTwo/>
        <MenuMakanan menu={menus}/>
      </div>

      <div className='flex flex-row justify-between w-full px-8 md:px-28'>
        <div className='w-1/3 h-[0.5px] bg-black shadow-2xl'></div>
        <div className='w-1/3 h-[0.5px] bg-black shadow-2xl'></div>
      </div>

      <div className="bg-white pt-2 md:pt-8 md:pb-24">
        <BodyMenuThree/>
        <MenuMinuman menu={menus}/>
      </div>

      <div className='flex flex-row justify-between w-full px-8 md:px-28'>
        <div className='w-1/3 h-[0.5px] bg-black shadow-2xl'></div>
        <div className='w-1/3 h-[0.5px] bg-black shadow-2xl'></div>
      </div>

      <div className="bg-white pt-2 md:pt-8 pb-36">
        <BodyMenuFour/>
        <MenuCamilan menu={menus}/>
      </div>

      <div className="w-full h-[0.5px] bg-black"></div>

      <div className="pt-14">
        <FooterFix/>
      </div>
    </>
  );
}