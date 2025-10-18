import Btn from "../components/common/Btn";
import { ReactComponent as NextIcon } from "../assets/icons/arrow.svg";
import { ReactComponent as DateIcon } from "../assets/icons/date.svg";
import { useRegister } from "../components/context/RegisterContext";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PersonalInfo() {
  const { formData, updateFormData, updateCurrentStep } = useRegister();
  const navigate = useNavigate();

  //React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({ mode: "onChange", defaultValues: formData.personal });

  const onSubmit = (data) => {
    updateFormData("personal", data);
    navigate("/register/education");
  };

  useEffect(() => {
    updateCurrentStep(1);
  }, []);

  return (
    <div className="personal_info flex flex-col gap-6">
      <div className="head flex flex-col gap-6">
        <span className="text-3xl">Personal Information</span>
        <span className="text-lg">
          Enter your personal information to get closer to your dream job
        </span>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="form-group flex justify-between items-center gap-2">
            <div className="form-inp flex flex-col gap-2">
              <label htmlFor="firstName" className="font-medium text-blue-300">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className={`py-2 px-4 border border-blue-700 bg-blue-700/10 rounded-[32px] focus:ring focus:ring-blue-300 outline-none placeholder:text-blue-300 placeholder:text-opacity-50 text-blue-300 ${
                  errors.firstname && "border-red-500 focus:ring-red-300"
                }`}
                placeholder="First name"
                name="firstname"
                {...register("firstname", {
                  required: "First name is required",
                  minLength: {
                    value: 1,
                    message: "First name must be at least 1 characters",
                  },
                })}
              />
              {errors.firstname && (
                <div className="mt-1 text-red-500 text-xs">
                  {errors.firstname.message}
                </div>
              )}
            </div>
            <div className="form-inp flex flex-col gap-2">
              <label htmlFor="lastName" className="font-medium text-blue-300">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className={`py-2 px-4 border border-blue-700 bg-blue-700/10 rounded-[32px] focus:ring focus:ring-blue-300 outline-none placeholder:text-blue-300 placeholder:text-opacity-50 text-blue-300 ${
                  errors.lastname && "border-red-500 focus:ring-red-300"
                }`}
                placeholder="Last name"
                {...register("lastname", {
                  required: "Last name is required",
                  minLength: {
                    value: 1,
                    message: "Last name must be at least 1 characters",
                  },
                })}
              />
              {errors.lastname && (
                <div className="mt-1 text-red-500 text-xs">
                  {errors.lastname.message}
                </div>
              )}
            </div>
          </div>
          <div className="form-group flex justify-between items-center gap-2">
            <div className="form-inp flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-blue-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`py-2 px-4 border border-blue-700 bg-blue-700/10 rounded-[32px] focus:ring focus:ring-blue-300 outline-none placeholder:text-blue-300 placeholder:text-opacity-50 text-blue-300 ${
                  errors.email && "border-red-500 focus:ring-red-300"
                }`}
                placeholder="Email"
                name="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <div className="mt-1 text-red-500 text-xs">
                  {errors.email.message}
                </div>
              )}
            </div>
            <div className="form-inp flex flex-col gap-2">
              <label htmlFor="phone" className="font-medium text-blue-300">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className={`py-2 px-4 border border-blue-700 bg-blue-700/10 rounded-[32px] focus:ring focus:ring-blue-300 outline-none placeholder:text-blue-300 placeholder:text-opacity-50 text-blue-300 ${
                  errors.phone && "border-red-500 focus:ring-red-300"
                }`}
                placeholder="Phone number"
                name="phone"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^^\+994 \d{2} \d{3} \d{2} \d{2}$/,
                    message:
                      "Phone number must be in the format +994 XX XXX XX XX",
                  },
                })}
              />
              {errors.phone && (
                <div className="mt-1 text-red-500 text-xs">
                  {errors.phone.message}
                </div>
              )}
            </div>
          </div>
          <div className="form-inp flex flex-col gap-2 relative">
            <div className="flex flex-col gap-2 relative">
              <label htmlFor="date" className="font-medium text-blue-300">
                Date of Birth
              </label>
              <input
                type="date"
                id="date"
                name="bthdate"
                className={`custom-date-input py-2 px-4 border border-blue-700 bg-blue-700/10 rounded-[32px] focus:ring focus:ring-blue-300 outline-none placeholder:text-blue-300 placeholder:text-opacity-50 text-blue-300 ${
                  errors.bthdate && "border-red-500 focus:ring-red-300"
                }`}
                {...register("bthdate", {
                  required: "Date of birth is required",
                })}
              />
              <DateIcon className="w-4 h-4 absolute right-4 top-1/2 translate-y-1/2" />
            </div>
            {errors.bthdate && (
              <div className="mt-1 text-red-500 text-xs">
                {errors.bthdate.message}
              </div>
            )}
          </div>
          <div className="btn mt-8 flex justify-end">
            {/* <Btn
              text={"Next"}
              icon={<NextIcon className="w-4 h-4" />}
              link={
                Object.keys(formData?.personal).length !== 0 &&
                "/register/education"
              }
              disabled={Object.keys(formData?.personal).length === 0}
            /> */}
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
    </div>
  );
}
