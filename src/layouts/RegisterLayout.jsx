import Header from "../components/common/Header";
import ProgressBar from "../components/common/ProgressBar";
import { Outlet } from "react-router-dom";
import { useRegister } from "../components/context/RegisterContext";

{
  /* слева будет прогресс бар а справа сама форма */
}
export default function RegisterLayout() {
  const { globalError, setGlobalError } = useRegister();
  return (
    <div className="relative w-full min-h-[100vh] flex justify-center items-center py-[5%]">
      <div className="absolute inset-0 bg-main-bg bg-no-repeat bg-cover bg-center blur-md"></div>
      <div className="flex flex-col w-[90%] md:w-[70%] lg:w-[50%] xl:w-[45%] min-h-[60vh] z-10 rounded-xl bg-white/20 border-4 border-white/10">
        <Header />
        <div className="flex flex-col w-full h-full">
          {globalError && (
            <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white py-3 px-6 rounded-xl shadow-lg z-50">
              {globalError}
              <button
                onClick={() => setGlobalError(null)}
                className="ml-4 bg-white/20 px-3 py-1 rounded-md hover:bg-white/30 transition"
              >
                OK
              </button>
            </div>
          )}
          <ProgressBar />
          <div className="mx-4 mb-4 px-4 py-6 flex-1 h-hull text-white">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
