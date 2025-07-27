"use client";
import React, { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { ImageUp } from "lucide-react";
import Image from "next/image";
import { getImagePaht } from "@/src/utils";
type ImageUpload = {
  image: string | undefined;
};
function ImageUpload({ image }: ImageUpload) {
  const [imageUrl, setImageUrl] = useState("");
  return (
    <CldUploadWidget
      uploadPreset="next-quiosco"
      options={{ maxFiles: 1 }}
      onSuccess={(results, { widget }) => {
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
              className="bg-gray-100 py-10 px-4 flex flex-col justify-center items-center cursor-pointer relative opacity-90"
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
          <input
            type="hidden"
            name="image-url"
            defaultValue={imageUrl ? imageUrl : image}
          />
          {image && !imageUrl && (
            <div className="" onClick={() => open()}>
              <label>Image actual:</label>
              <div className="bg-gray-100 h-60 flex flex-col justify-center items-center relative">
                <Image
                  fill
                  style={{ objectFit: "contain" }}
                  src={getImagePaht(image)}
                  alt="Imagen de producto"
                />
              </div>
            </div>
          )}
        </>
      )}
    </CldUploadWidget>
  );
}

export default ImageUpload;
