import { ReactComponent as NextIcon } from "../assets/icons/arrow.svg";
import { ReactComponent as PlusIcon } from "../assets/icons/plus.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import { useState } from "react";
import Btn from "../components/common/Btn";

export default function Experience() {
  const [education, setEducation] = useState([{}]);

  const handleAddEducationItem = () => {
    setEducation((prev) => [...prev, {}]);
  };

  const handleRemoveEducationItem = (index) => {
    setEducation((prev) => prev.filter((_, i) => i !== index));
  };

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

  return (
    <div className="personal_info flex flex-col gap-6">
      <div className="head flex flex-col gap-6">
        <span className="text-3xl">Experience</span>
        <span className="text-lg">
          Enter your work experience information to get closer to your dream job
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
                    // value={value}
                    // onChange={onChange}
                    className="py-2 ps-4 pe-8 border border-blue-700 bg-blue-700/10 rounded-[32px] focus:ring focus:ring-blue-300 outline-none placeholder:text-blue-300 placeholder:text-opacity-50 text-blue-300"
                    placeholder="Enter company name"
                  />
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
                    // value={value}
                    // onChange={onChange}
                    className="py-2 ps-4 pe-8 border border-blue-700 bg-blue-700/10 rounded-[32px] focus:ring focus:ring-blue-300 outline-none placeholder:text-blue-300 placeholder:text-opacity-50 text-blue-300"
                    placeholder="Enter department name"
                  />
                </div>
              </div>
              <div className="form-group grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    // value={value}
                    // onChange={onChange}
                    className="py-2 ps-4 pe-8 border border-blue-700 bg-blue-700/10 rounded-[32px] focus:ring focus:ring-blue-300 outline-none placeholder:text-blue-300 placeholder:text-opacity-50 text-blue-300"
                    placeholder="Enter position name"
                  />
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
          link="/register/user-photo"
        />
      </div>
    </div>
  );
}
