"use client";
import React, { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { ImageUp } from "lucide-react";
import Image from "next/image";
function ImageUpload() {
  const [imageUrl, setImageUrl] = useState("");
  return (
    <CldUploadWidget
      uploadPreset="next-quiosco"
      options={{ maxFiles: 1 }}
      onSuccess={(results, { widget }) => {
        console.log(results);

        if (results.event === "success") {
          //@ts-ignore
          setImageUrl(results.info.secure_url);
          widget.close();
        }
      }}
    >
      {({ open }) => (
        <>
          <div>
            <label htmlFor="">Subir imagen</label>
            <div
              className="bg-gray-100 py-10 px-4 flex flex-col justify-center items-center cursor-pointe relative"
              onClick={() => open()}
            >
              <ImageUp className="size-15 text-gray-500"></ImageUp>
              <p>Agregar imagen</p>
              {imageUrl && (
                <Image
                  fill
                  style={{ objectFit: "contain" }}
                  src={imageUrl}
                  alt="Imagen de producto"
                ></Image>
              )}
            </div>
          </div>
          <input type="hidden" value={imageUrl} name="image-url" />
        </>
      )}
    </CldUploadWidget>
  );
}

export default ImageUpload;
