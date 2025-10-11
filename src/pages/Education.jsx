import Btn from "../components/common/Btn";
import { ReactComponent as NextIcon } from "../assets/icons/arrow.svg";
import { ReactComponent as EducationIcon } from "../assets/icons/education.svg";
import { useMemo } from "react";

export default function Education() {
  //   {
  //   "type": "School",
  //   "name": "",
  //   "degree": "High School",
  //   "startYear": 2020,
  //   "endYear": 2025,
  //   "isCurrent": false
  // }

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
  const inputClasses = ("py-2 px-4 border border-blue-700 bg-blue-700/10 rounded-[32px] focus:ring focus:ring-blue-300 outline-none placeholder:text-blue-300 placeholder:text-opacity-50 text-blue-300");
  const labelClasses = "font-medium text-blue-300";

  const FormInput = ({
    label,
    name,
    type = "text",
    value,
    onChange,
    options,
    placeholder,
  }) => (
    <div className="form-inp flex flex-col gap-2 flex-1">
      <label htmlFor={name} className={labelClasses}>
        {label}
      </label>
      {type === "select" ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={inputClasses + " appearance-none cursor-pointer"}
        >
          {options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={inputClasses}
          placeholder={placeholder}
        />
      )}
    </div>
  );

  return (
    <div className="personal_info flex flex-col gap-6">
      <div className="head flex flex-col gap-6">
        <span className="text-3xl">Education</span>
        <span className="text-lg">
          Enter your education information to get closer to your dream job
        </span>
      </div>
      <div className="form">
        <form action="" className="flex flex-col gap-4">
          {/* <div className="form-group flex justify-between items-center gap-2">
            <div className="form-inp flex flex-col gap-2">
              <label htmlFor="firstName" className="font-medium text-blue-300">
                Type
              </label>
              <select
                type="text"
                id="firstName"
                className="py-2 px-4 border border-blue-700 bg-blue-700/10 rounded-[32px] focus:ring focus:ring-blue-300 outline-none placeholder:text-blue-300 placeholder:text-opacity-50 text-blue-300"
                placeholder="First name"
              >
                <option value="School">School</option>
                <option value="University">University</option>
                <option value="College">College</option>
              </select>
            </div>
            <div className="form-inp flex flex-col gap-2">
              <label htmlFor="firstName" className="font-medium text-blue-300">
                Name
              </label>
              <input
                type="text"
                id="firstName"
                className="py-2 px-4 border border-blue-700 bg-blue-700/10 rounded-[32px] focus:ring focus:ring-blue-300 outline-none placeholder:text-blue-300 placeholder:text-opacity-50 text-blue-300"
                placeholder="First name"
              />
            </div>
            <div className="form-inp flex flex-col gap-2">
              <label htmlFor="firstName" className="font-medium text-blue-300">
                Degree
              </label>
              <select
                type="text"
                id="firstName"
                className="py-2 px-4 border border-blue-700 bg-blue-700/10 rounded-[32px] focus:ring focus:ring-blue-300 outline-none placeholder:text-blue-300 placeholder:text-opacity-50 text-blue-300"
                placeholder="First name"
              >
                <option value="High School">High School</option>
                <option value="Bachelors">Bachelors</option>
                <option value="Masters">Masters</option>
                <option value="PhD">PhD</option>
              </select>
            </div>
            <div className="form-inp"></div>
          </div> */}
          <div className="form-group grid grid-cols-1 sm:grid-cols-3 gap-4">
            <FormInput
              label="Type"
              name="type"
              type="select"
              options={typeOptions}
            />
            <FormInput
              label="Name"
              name="name"
              type="text"
              placeholder="Например, Оксфордский Университет"
            />

            {/* Степень */}
            <FormInput
              label="Degree"
              name="degree"
              type="select"
              options={degreeOptions}
            />
          </div>

          {/* --- 2. ГОДЫ ОБУЧЕНИЯ И ЧЕКБОКС --- */}
          <div className="form-group grid grid-cols-2 sm:grid-cols-4 gap-4 items-end">
            {/* Год Зачисления */}
            <FormInput
              label="Year of Admission"
              name="startYear"
              type="select"
              // options={yearOptions}
            />

            {/* Год Окончания (Динамический) */}
            {/* {!formData.isCurrent && ( */}
            <FormInput
              label="Graduation Year"
              name="endYear"
              type="select"
              // options={yearOptions.filter((y) => y >= formData.startYear)} // Год окончания >= года начала
            />
            {/* )} */}

            {/* Чекбокс "Учусь в настоящее время" */}
            <div
              className={`form-inp flex flex-col justify-end ${
                ""
                // formData.isCurrent
                //   ? "col-span-3 sm:col-span-2"
                //   : "col-span-2 sm:col-span-1"
              } h-full`}
            >
              <label className="flex items-center space-x-2 p-3 bg-blue-50 dark:bg-neutral-700/50 rounded-xl cursor-pointer transition hover:shadow-md">
                <input
                  type="checkbox"
                  name="isCurrent"
                  // checked={formData.isCurrent}
                  // onChange={handleCurrentChange}
                  className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                />
                <span className="text-sm font-medium text-gray-900 dark:text-white select-none">
                  Учусь в настоящее время
                </span>
              </label>
            </div>
          </div>
        </form>
      </div>
      <div className="btn mt-8 flex justify-end">
        <Btn
          text={"Next"}
          icon={<NextIcon className="w-4 h-4" />}
          link="/register/languages"
        />
      </div>
    </div>
  );
}
