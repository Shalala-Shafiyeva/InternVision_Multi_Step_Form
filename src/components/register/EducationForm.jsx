import Btn from "../components/common/Btn";
import { ReactComponent as NextIcon } from "../assets/icons/arrow.svg";
import { ReactComponent as EducationIcon } from "../assets/icons/education.svg";

export default function Education() {
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
          <div className="form-group flex justify-between items-center gap-2">
            <div className="form-inp flex flex-col gap-2">
              <label htmlFor="firstName" className="font-medium text-blue-300">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="py-2 px-4 border border-blue-700 bg-blue-700/10 rounded-[32px] focus:ring focus:ring-blue-300 outline-none placeholder:text-blue-300 placeholder:text-opacity-50 text-blue-300"
                placeholder="First name"
              />
            </div>
          </div>
          <div className="btn mt-8 flex justify-end">
            <Btn
              text={"Next"}
              icon={<NextIcon className="w-4 h-4" />}
              link="/register/languages"
            />
          </div>
        </form>
      </div>
    </div>
  )
}
