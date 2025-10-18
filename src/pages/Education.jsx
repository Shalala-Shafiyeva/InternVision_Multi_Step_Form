import { useForm, useFieldArray } from "react-hook-form";
import Btn from "../components/common/Btn";
import { ReactComponent as NextIcon } from "../assets/icons/arrow.svg";
import { ReactComponent as ChevronIcon } from "../assets/icons/chevron.svg";
import { ReactComponent as PlusIcon } from "../assets/icons/plus.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import { useEffect, useMemo } from "react";
import { useRegister } from "../components/context/RegisterContext";
import { useNavigate } from "react-router-dom";

export default function Education() {
  //   {
  //   "type": "School",
  //   "name": "",
  //   "degree": "High School",
  //   "startYear": 2020,
  //   "endYear": 2025,
  //   "isCurrent": false
  // }

  const navigate = useNavigate();
  const { formData, updateFormData, updateCurrentStep } = useRegister();
  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    defaultValues: {
      education:
        formData.education.length > 0
          ? formData.education
          : [
              {
                type: "",
                name: "",
                degree: "",
                startYear: "",
                endYear: "",
              },
            ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  const generateYearOptions = (startOffset = 60, endOffset = 0) => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (
      let year = currentYear - endOffset;
      year >= currentYear - startOffset;
      year--
    ) {
      years.push(year);
    }
    return years;
  };

  const degreeOptions = [
    "High School",
    "Associate's",
    "Bachelor's",
    "Master's",
    "PhD",
    "Certification",
  ];
  const typeOptions = ["School", "College", "University", "Vocational"];
  const yearOptions = useMemo(() => generateYearOptions(60), []);

  const onSubmit = (data) => {
    updateFormData("education", data.education);
    navigate("/register/experience");
  };

  useEffect(() => {
    updateCurrentStep(2);
  }, []);

  return (
    <div className="personal_info flex flex-col gap-6">
      <div className="head flex flex-col gap-6">
        <span className="text-3xl">Education</span>
        <span className="text-lg">
          Enter your education information to get closer to your dream job
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="add_btn">
          <button
            type="button"
            onClick={() =>
              append({
                type: "",
                name: "",
                degree: "",
                startYear: "",
                endYear: "",
              })
            }
            className="w-[max-content] py-2 px-8 rounded-[32px] flex items-center gap-2 text-rose-100 bg-blue-700 border border-blue-700 hover:bg-blue-600 transition-all duration-200 ease-in-out"
          >
            <PlusIcon className="w-4 h-4" />
            <span className="text-sm">Add</span>
          </button>
        </div>

        {fields.map((field, index) => (
          <div
            key={field.id}
            className="box-cover flex flex-col gap-4 border border-blue-700 p-4 rounded-xl bg-black/20 relative"
          >
            {index !== 0 && (
              <button
                type="button"
                onClick={() => index !== 0 && remove(index)}
                className="absolute top-2 right-2"
              >
                <CloseIcon className="w-4 h-4 cursor-pointer" />
              </button>
            )}

            <div className="form-group grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-blue-300 font-medium">Type</label>
                <div className="relative">
                  <select
                    {...register(`education.${index}.type`, {
                      required: "Type is required",
                    })}
                    className={`appearance-none relative w-full py-2 ps-4 pe-8 outline-none border border-blue-700 bg-blue-700/10 rounded-[32px] text-blue-300 ${
                      errors.education?.[index]?.type && "border-red-500"
                    }`}
                  >
                    <option value="">Select type</option>
                    {typeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronIcon className="w-4 h-4 absolute top-1/2 right-3 -translate-y-1/2" />
                </div>
                {errors.education?.[index]?.type && (
                  <div className="mt-1 text-red-500 text-xs">
                    {errors.education[index].type.message}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-blue-300 font-medium">Name</label>
                <input
                  {...register(`education.${index}.name`, {
                    required: "Name is required",
                  })}
                  placeholder="For example, Harvard University"
                  className={`py-2 ps-4 pe-8 border border-blue-700 bg-blue-700/10 rounded-[32px] text-blue-300 ${
                    errors.education?.[index]?.name &&
                    "border-red-500 focus:ring-red-300"
                  }`}
                />
                {errors.education?.[index]?.name && (
                  <div className="mt-1 text-red-500 text-xs">
                    {errors.education[index].name.message}
                  </div>
                )}
              </div>
            </div>

            <div className="form-group grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-blue-300 font-medium">Degree</label>
                <div className="relative">
                  <select
                    {...register(`education.${index}.degree`, {
                      required: "Degree is required",
                    })}
                    className={`appearance-none relative py-2 ps-4 pe-8 w-full border border-blue-700 bg-blue-700/10 rounded-[32px] text-blue-300 ${
                      errors.education?.[index]?.degree && "border-red-500"
                    }`}
                  >
                    <option value="">Select degree</option>
                    {degreeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronIcon className="w-4 h-4 absolute top-1/2 right-3 -translate-y-1/2" />
                </div>
                {errors.education?.[index]?.degree && (
                  <div className="mt-1 text-red-500 text-xs">
                    {errors.education[index].degree.message}
                  </div>
                )}
              </div>
            </div>

            <div className="form-group grid grid-cols-2 sm:grid-cols-3 gap-4 items-end">
              <div className="flex flex-col gap-2">
                <label className="text-blue-300 font-medium">
                  Year of Admission
                </label>
                <div className="relative">
                  <select
                    {...register(`education.${index}.startYear`, {
                      required: "Year of admission is required",
                    })}
                    className={`appearance-none w-full py-2 ps-4 pe-8 border border-blue-700 bg-blue-700/10 rounded-[32px] text-blue-300 ${
                      errors.education?.[index]?.startYear && "border-red-500"
                    }`}
                  >
                    <option value="">Select year</option>
                    {yearOptions.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <ChevronIcon className="w-4 h-4 absolute top-1/2 right-3 -translate-y-1/2" />
                </div>
                {errors.education?.[index]?.startYear && (
                  <div className="mt-1 text-red-500 text-xs">
                    {errors.education[index].startYear.message}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-blue-300 font-medium">
                  Graduation Year
                </label>
                <div className="relative">
                  <select
                    {...register(`education.${index}.endYear`, {
                      required: "Graduation year is required",
                    })}
                    className={`appearance-none w-full py-2 ps-4 pe-8 border border-blue-700 bg-blue-700/10 rounded-[32px] text-blue-300 disabled:opacity-50 ${
                      errors.education?.[index]?.endYear && "border-red-500"
                    }`}
                  >
                    <option value="">Select year</option>
                    {yearOptions.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                  <ChevronIcon className="w-4 h-4 absolute top-1/2 right-3 -translate-y-1/2" />
                </div>
                {errors.education?.[index]?.endYear && (
                  <div className="mt-1 text-red-500 text-xs">
                    {errors.education[index].endYear.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        <div className="btn mt-8 flex justify-end gap-2">
          <Btn
            text={"Back"}
            icon={<NextIcon className="w-4 h-4" />}
            rotate={true}
            link="/register/personal-info"
          />
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className={`w-[max-content] py-2 px-8 rounded-[32px] flex items-center gap-2 text-rose-100 border border-blue-700 transition-all duration-200 ease-in-out ${
              !isValid
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-600"
            }`}
          >
            <span>Next</span>
            <NextIcon className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
