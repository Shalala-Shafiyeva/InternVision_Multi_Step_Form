import Btn from "../components/common/Btn";
import { ReactComponent as NextIcon } from "../assets/icons/arrow.svg";
import { ReactComponent as ChevronIcon } from "../assets/icons/chevron.svg";
import { ReactComponent as PlusIcon } from "../assets/icons/plus.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import { useMemo, useState } from "react";

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
  const [isCurrent, setIsCurrent] = useState(false);
  const [education, setEducation] = useState([{}]);
  const inputClasses =
    "py-2 ps-4 pe-8 border border-blue-700 bg-blue-700/10 rounded-[32px] focus:ring focus:ring-blue-300 outline-none placeholder:text-blue-300 placeholder:text-opacity-50 text-blue-300";
  const labelClasses = "font-medium text-blue-300";

  const FormInput = ({
    label,
    name,
    type = "text",
    value,
    onChange,
    options,
    placeholder,
    disabled,
  }) => (
    <div className="form-inp flex flex-col gap-2 flex-1 relative">
      <label htmlFor={name} className={labelClasses}>
        {label}
      </label>
      {type === "select" ? (
        <>
          <ChevronIcon className="w-4 h-4 absolute right-4 top-1/2 translate-y-1/2" />
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className={inputClasses + " appearance-none cursor-pointer"}
            disabled={disabled}
          >
            {options?.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </>
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

  const handleCurrentChange = (e) => {
    setIsCurrent(e.target.checked);
  };

  const handleAddEducationItem = () => {
    setEducation((prev) => [...prev, {}]);
  };

  const handleRemoveEducationItem = (index) => {
    setEducation((prev) => prev.filter((_, i) => i !== index));
  };

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
          <div className="add_btn">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleAddEducationItem();
              }}
              className="w-[max-content] py-2 px-8 rounded-[32px] flex items-center gap-2 text-rose-100 bg-blue-700 border border-blue-700 hover:bg-blue-600 transition-all duration-200 ease-in-out"
            >
              <PlusIcon className="w-4 h-4" />
              <span className="text-sm">Add</span>
            </button>
          </div>
          {education?.map((edu, i) => (
            <div className="box-cover flex flex-col gap-4 border border-blue-700 p-4 rounded-xl bg-black/20 relative">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleRemoveEducationItem(i);
                }}
              >
                <CloseIcon className="w-4 h-4 absolute top-2 right-2 cursor-pointer" />
              </button>
              <div className="form-group grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  placeholder="For example, Harvard University"
                />
              </div>
              <div className="form-group grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Степень */}
                <FormInput
                  label="Degree"
                  name="degree"
                  type="select"
                  options={degreeOptions}
                />
              </div>

              {/* --- 2. ГОДЫ ОБУЧЕНИЯ И ЧЕКБОКС --- */}
              <div className="form-group grid grid-cols-2 sm:grid-cols-3 gap-4 items-end">
                {/* Год Зачисления */}
                <FormInput
                  label="Year of Admission"
                  name="startYear"
                  type="select"
                  options={yearOptions}
                />

                {/* Год Окончания (Динамический) */}

                <FormInput
                  label="Graduation Year"
                  name="endYear"
                  type="select"
                  options={yearOptions}
                  disabled={isCurrent}
                />

                {/* Чекбокс "Учусь в настоящее время" */}
                <div className={`form-inp flex flex-col justify-end h-full`}>
                  <label className="flex items-center space-x-2 p-3 bg-blue-50 dark:bg-neutral-700/50 rounded-xl cursor-pointer transition hover:shadow-md">
                    <input
                      type="checkbox"
                      name="isCurrent"
                      checked={isCurrent}
                      onChange={handleCurrentChange}
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-medium text-gray-900 dark:text-white select-none">
                      Keep studing
                    </span>
                  </label>
                </div>
              </div>
            </div>
          ))}
        </form>
      </div>
      <div className="btn mt-8 flex justify-end">
        <Btn
          text={"Next"}
          icon={<NextIcon className="w-4 h-4" />}
          // link="/register/languages"
          link="/register/experience"
        />
      </div>
    </div>
  );
}
