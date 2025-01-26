import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import "../../../AddItem.css";

export default function BodyRateTwo() {
  const [name, setName] = useState("Anonymous");
  const [review, setReview] = useState("");
  const maxLength = 200;
  const db = getFirestore();
  const reviewsCollection = collection(db, "reviews");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!review.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Ulasan kosong",
        text: "Oops, sepertinya Anda belum menuliskan ulasan. Silakan isi kolom ulasan sebelum mengirim.",
        confirmButtonColor: "#f59e0b", // Warna tombol
      });
      return;
    }

    if (name.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Nama kosong",
        text: "Mohon isi nama Anda sebelum mengirim ulasan.",
        confirmButtonColor: "#f59e0b",
      });
      return;
    }

    try {
      await addDoc(reviewsCollection, {
        name: name || "Anonymous",
        review,
        timestamp: new Date().toISOString(),
      });

      Swal.fire({
        icon: "success",
        title: "Ulasan Terkirim",
        text: "Terima kasih! Ulasan Anda berhasil dikirim.",
        confirmButtonColor: "#10b981", // Hijau
      });

      setName("Anonymous");
      setReview("");
    } catch (error) {
      console.error("Terjadi kesalahan saat mengirim ulasan:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal Mengirim",
        text: "Maaf, terjadi kesalahan saat mengirim ulasan. Silakan coba lagi nanti.",
        confirmButtonColor: "#ef4444", // Merah
      });
    }
  };

  return (
    <div className="pt-5 px-20">
      <p className="montserrat text-black text-4xl font-semibold mb-7">
        Ingin memberikan penilaian?
      </p>

      <div className="bg-orange-400 w-full md:h-auto px-14 py-7 rounded-2xl">
        <form onSubmit={handleSubmit}>
          {/* INPUT Username */}
          <section className="mb-5">
            <label className="montserrat text-white text-xl font-semibold">
              Nama (boleh anonim):
            </label>
            <div className="w-1/4 bg-white px-3 py-2 rounded-2xl shadow-lg">
              <input
                type="text"
                id="username"
                placeholder="Masukkan nama Anda"
                maxLength={20}
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent text-xl outline-none placeholder:font-semibold"
              />
            </div>
          </section>

          {/* INPUT Komentar */}
          <section className="mt-5">
            <label className="montserrat text-white text-xl font-semibold">
              Beri ulasan Anda:
            </label>
            <div className="w-1/2 bg-white px-3 py-2 rounded-2xl shadow-lg">
              <textarea
                placeholder="Berikan pendapat Anda"
                maxLength={maxLength}
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="w-full h-40 bg-transparent text-xl placeholder:font-semibold outline-none resize-none"
              />
              <small className="text-sm text-gray-500 pt-2">
                {review.length}/{maxLength} karakter
              </small>
            </div>
          </section>

          {/* BUTTON Submit */}
          <div className="flex justify-end items-end mt-20">
            <button
              type="submit"
              className="montserrat items-end px-10 py-3 bg-orange-600 md:hover:bg-orange-700 active:bg-orange-300 text-white text-lg 
              font-semibold rounded-2xl shadow-lg transition-all duration-150"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
