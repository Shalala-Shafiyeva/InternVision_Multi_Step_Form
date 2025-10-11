import Header from "../components/common/Header";
import ProgressBar from "../components/common/ProgressBar";
import { Outlet } from "react-router-dom";

{
  /* слева будет прогресс бар а справа сама форма */
}
export default function RegisterLayout() {
  return (
    <div className="relative w-full min-h-[100vh] flex justify-center items-center">
      <div className="absolute inset-0 bg-main-bg bg-no-repeat bg-cover bg-center blur-md"></div>
      <div className="flex flex-col w-[50%] min-h-[50%] z-10 rounded-xl bg-white/20 border-4 border-white/10">
        <Header />
        <div className="flex w-full h-full border">
          <ProgressBar />
          <div className="mx-4 mb-4 px-4 py-6 flex-1 h-hull text-white">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
