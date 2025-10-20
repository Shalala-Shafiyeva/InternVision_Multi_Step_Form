import { ReactComponent as NextIcon } from "../assets/icons/arrow.svg";
import { ReactComponent as PlusIcon } from "../assets/icons/plus.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import { ReactComponent as ChevronIcon } from "../assets/icons/chevron.svg";
import { useEffect, useMemo } from "react";
import Btn from "../components/common/Btn";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../components/context/RegisterContext";
import { useFieldArray, useForm } from "react-hook-form";

export default function Experience() {
  const navigate = useNavigate();
  const { formData, updateFormData, updateCurrentStep } = useRegister();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    criteriaMode: "all",
    defaultValues: {
      experience:
        formData.experience.length > 0
          ? formData.experience
          : [
              {
                company: "",
                department: "",
                position: "",
                startYear: "",
                endYear: "",
              },
            ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
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

  const yearOptions = useMemo(() => generateYearOptions(60), []);

  const onSubmit = (data) => {
    updateFormData("experience", data.experience);
    navigate("/register/user-photo");
  };

  useEffect(() => {
    updateCurrentStep(3);
  }, []);

  return (
    <div className="personal_info flex flex-col gap-6">
      <div className="head flex flex-col gap-6">
        <span className="text-3xl">Experience</span>
        <span className="text-lg">
          Enter your work experience information to get closer to your dream job
        </span>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="add_btn">
            <button
              onClick={() =>
                append({
                  company: "",
                  department: "",
                  position: "",
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
              <div className="form-group grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                <div className="form-inp flex flex-col gap-2 flex-1">
                  <label
                    htmlFor="company"
                    className="font-medium text-blue-300"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className={`py-2 ps-4 pe-8 border border-blue-700 bg-blue-700/10 rounded-[32px] focus:ring focus:ring-blue-300 outline-none placeholder:text-blue-300 placeholder:text-opacity-50 text-blue-300 ${
                      errors.experience?.[index]?.company &&
                      "border-red-500 focus:ring-red-300"
                    }`}
                    placeholder="Enter company name"
                    {...register(`experience.${index}.company`, {
                      required: "Company is required",
                    })}
                  />
                  {errors.experience?.[index]?.company && (
                    <div className="mt-1 text-red-500 text-xs">
                      {errors.experience[index].company.message}
                    </div>
                  )}
                </div>
                <div className="form-inp flex flex-col gap-2 flex-1">
                  <label
                    htmlFor="department"
                    className="font-medium text-blue-300"
                  >
                    Department
                  </label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    className={`py-2 ps-4 pe-8 border border-blue-700 bg-blue-700/10 rounded-[32px] focus:ring focus:ring-blue-300 outline-none placeholder:text-blue-300 placeholder:text-opacity-50 text-blue-300 ${
                      errors.experience?.[index]?.department &&
                      "border-red-500 focus:ring-red-300"
                    }`}
                    placeholder="Enter department name"
                    {...register(`experience.${index}.department`, {
                      required: "Department is required",
                    })}
                  />
                  {errors.experience?.[index]?.department && (
                    <div className="mt-1 text-red-500 text-xs">
                      {errors.experience[index].department.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                <div className="form-inp flex flex-col gap-2 flex-1">
                  <label
                    htmlFor="position"
                    className="font-medium text-blue-300"
                  >
                    Position
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    className={`py-2 ps-4 pe-8 border border-blue-700 bg-blue-700/10 rounded-[32px] focus:ring focus:ring-blue-300 outline-none placeholder:text-blue-300 placeholder:text-opacity-50 text-blue-300 ${
                      errors.experience?.[index]?.position &&
                      "border-red-500 focus:ring-red-300"
                    }`}
                    placeholder="Enter position name"
                    {...register(`experience.${index}.position`, {
                      required: "Position is required",
                    })}
                  />
                  {errors.experience?.[index]?.position && (
                    <div className="mt-1 text-red-500 text-xs">
                      {errors.experience[index].position.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                <div className="form-inp flex flex-col gap-2">
                  <label className="text-blue-300 font-medium">
                    Start year
                  </label>
                  <div className="relative">
                    <select
                      {...register(`experience.${index}.startYear`, {
                        required: "Start year is required",
                      })}
                      className={`appearance-none outline-none focus:ring focus:ring-blue-300 w-full py-2 ps-4 pe-8 border border-blue-700 bg-blue-700/10 rounded-[32px] text-blue-300 ${
                        errors.experience?.[index]?.startYear &&
                        "border-red-500 focus:ring-red-300"
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
                  {errors.experience?.[index]?.startYear && (
                    <div className="mt-1 text-red-500 text-xs">
                      {errors.experience[index].startYear.message}
                    </div>
                  )}
                </div>
                <div className="form-inp flex flex-col gap-2">
                  <label className="text-blue-300 font-medium">End Year</label>
                  <div className="relative">
                    <select
                      {...register(`experience.${index}.endYear`, {
                        required: "End year is required",
                        validate: (value, allValues) => {
                          const start = allValues.experience[index].startYear;
                          if (!value) return "End year is required";
                          if (start && Number(value) < Number(start)) {
                            return "End year cannot be earlier than start year";
                          }
                          return true;
                        },
                      })}
                      className={`appearance-none outline-none focus:ring focus:ring-blue-300 w-full py-2 ps-4 pe-8 border border-blue-700 bg-blue-700/10 rounded-[32px] text-blue-300 disabled:opacity-50 ${
                        errors.experience?.[index]?.endYear &&
                        "border-red-500 focus:ring-red-300"
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
                  {errors.experience?.[index]?.endYear && (
                    <div className="mt-1 text-red-500 text-xs">
                      {errors.experience[index].endYear.message}
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
              link="/register/education"
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
              <span>Next</span>
              <NextIcon className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
