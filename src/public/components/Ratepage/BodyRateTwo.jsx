import React, { useState } from "react";
import "../../../AddItem.css";

export default function BodyRateTwo() {
  const [value, setValue] = useState("");
  const maxLength = 200;

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="pt-5 px-20">
      <p className="montserrat text-black text-4xl font-semibold mb-7">
        Ingin memberikan penilaian?
      </p>

      <div className="bg-orange-400 w-full md:h-auto px-14 py-7 rounded-2xl">
        <form>
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
                defaultValue="Anonymous"
                required
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
                value={value}
                onChange={handleInputChange}
                className="w-full h-40 bg-transparent text-xl placeholder:font-semibold outline-none resize-none"
              />
              <small className="text-sm text-gray-500 pt-2">
                {value.length}/{maxLength} karakter
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
