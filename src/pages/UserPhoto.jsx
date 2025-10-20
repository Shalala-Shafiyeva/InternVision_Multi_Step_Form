import { useEffect, useState } from "react";
import { ReactComponent as NextIcon } from "../assets/icons/arrow.svg";
import { ReactComponent as UploadIcon } from "../assets/icons/upload.svg";
import Btn from "../components/common/Btn";
import { useRegister } from "../components/context/RegisterContext";
import { useForm } from "react-hook-form";
import SuccessModal from "../components/common/SuccessModal";

const PLACEHOLDER_IMG_URL =
  "https://placehold.co/192x192/93C5FD/1E3A8A?text=Upload+Photo";

export default function UserPhoto() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [photoPreviewUrl, setPhotoPreviewUrl] = useState(PLACEHOLDER_IMG_URL);
  const {
    formData,
    updateFormData,
    updateCurrentStep,
    clearFormData,
    setGlobalError,
  } = useRegister();

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

  //React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    criteriaMode: "all",
    defaultValues: formData.photo,
  });

  const onSubmit = (data) => {
    updateFormData("photo", data);
    const allData = formData;

    if (
      !allData.personal ||
      Object.keys(allData.personal).length === 0 ||
      !allData.education.length ||
      !allData.experience.length
    ) {
      setGlobalError(
        "It appears that some steps have not been completed. Please go back and check the previous pages."
      );
      return;
    }

    setShowSuccess(true);
    clearFormData();
  };

  useEffect(() => {
    updateCurrentStep(4);
  }, []);

  return (
    <div className="upload_photo flex flex-col gap-6">
      {showSuccess && <SuccessModal setShowSuccess={setShowSuccess} />}
      <div className="head flex flex-col gap-6">
        <span className="text-3xl">Upload your photo</span>
        <span className="text-lg">
          Upload your photo get closer to your dream job
        </span>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="form-group flex flex-col gap-6 items-center">
            <div className="form-inp w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400 dark:border-blue-600 shadow-lg">
              <img
                src={photoPreviewUrl}
                alt="Current User Photo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="form-inp flex flex-col gap-2">
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
                accept="image/*"
                className="hidden"
                {...register("photo", {
                  required: "Photo is required",
                  onChange: (e) => handleFileChange(e),
                })}
              />
              {errors.photo && (
                <div className="mt-1 text-red-500 text-xs">
                  {errors.photo.message}
                </div>
              )}
            </div>
            {photo && (
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Chosen photo:{" "}
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  {photo.name}
                </span>
              </p>
            )}
          </div>
          <div className="btn mt-8 flex justify-end gap-2">
            <Btn
              text={"Back"}
              icon={<NextIcon className="w-4 h-4" />}
              link="/register/experience"
              rotate={true}
            />
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className={`w-[max-content] py-2 px-8 text-xs md:text-md rounded-[32px] flex items-center gap-2 text-rose-100 border border-blue-700 transition-all duration-200 ease-in-out ${
                !isValid
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-700 hover:bg-blue-600"
              }`}
            >
              <span>Submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
