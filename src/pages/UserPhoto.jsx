import { useState } from "react";
import { ReactComponent as NextIcon } from "../assets/icons/arrow.svg";
import { ReactComponent as UploadIcon } from "../assets/icons/upload.svg";
import Btn from "../components/common/Btn";

const PLACEHOLDER_IMG_URL =
  "https://placehold.co/192x192/93C5FD/1E3A8A?text=Upload+Photo";

export default function UserPhoto() {
  const [photo, setPhoto] = useState(null);
  const [photoPreviewUrl, setPhotoPreviewUrl] = useState(PLACEHOLDER_IMG_URL);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPhotoPreviewUrl(URL.createObjectURL(file));
    } else {
      setPhoto(null);
      setPhotoPreviewUrl(PLACEHOLDER_IMG_URL);
    }
  };
  return (
    <div className="upload_photo flex flex-col gap-6">
      <div className="head flex flex-col gap-6">
        <span className="text-3xl">Upload your photo</span>
        <span className="text-lg">
          Upload your photo get closer to your dream job
        </span>
      </div>
      <div className="form">
        <form action="" className="flex flex-col gap-4">
          <div className="form-group flex flex-col gap-6 items-center">
            <div className="form-inp w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400 dark:border-blue-600 shadow-lg">
              <img
                src={photoPreviewUrl}
                alt="Current User Photo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="form-inp">
              <label
                htmlFor="photo-upload"
                className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-blue-600 bg-blue-100 dark:bg-blue-900/30 rounded-full cursor-pointer transition duration-200 hover:bg-blue-200 dark:hover:bg-blue-900/50 shadow-md"
              >
                <UploadIcon className="w-4 h-4" />
                {photo ? "Change photo" : "Upload photo"}
              </label>
              <input
                type="file"
                id="photo-upload"
                name="photo-upload"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
            {photo && (
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Выбран файл:{" "}
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  {photo.name}
                </span>
              </p>
            )}
          </div>
          <div className="btn mt-8 flex justify-end">
            <Btn text={"Submit"} />
          </div>
        </form>
      </div>
    </div>
  );
}
