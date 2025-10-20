import { ReactComponent as HexatonIcon } from "../../assets/icons/hexaton.svg";
import { useRegister } from "../../components/context/RegisterContext";

export default function ProgressBar() {
  const { currentStep } = useRegister();

  const steps = [
    { id: 1, label: "Personal" },
    { id: 2, label: "Education" },
    { id: 3, label: "Experience" },
    { id: 4, label: "Photo" },
  ];

  return (
    <div className="progress_bar flex justify-center items-center gap-6">
      {steps.map((step) => {
        const isCompleted = currentStep > step.id;
        const isActive = currentStep === step.id;

        return (
          <div key={step.id} className="flex flex-col items-center relative">
            <div
              className={`transition-transform duration-300 ${
                isActive
                  ? "scale-110"
                  : isCompleted
                  ? "opacity-90"
                  : "opacity-60 grayscale"
              }`}
            >
              <HexatonIcon
                className={`hexaton_icon h-8 w-8 sm:h-14 sm:w-14 stroke-1 ${
                  isCompleted
                    ? "fill-blue-600 stroke-blue-800 "
                    : isActive
                    ? "fill-blue-400 stroke-blue-300"
                    : "fill-gray-400 stroke-gray-300"
                }`}
              />
            </div>
            <span
              className={`mt-2 text-xs sm:text-sm ${
                isActive
                  ? "text-blue-600 font-semibold"
                  : isCompleted
                  ? "text-blue-400"
                  : "text-gray-400"
              }`}
            >
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
