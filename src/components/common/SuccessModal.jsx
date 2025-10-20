import { useNavigate } from "react-router-dom";

export default function SuccessModal({ setShowSuccess }) {
    const navigate = useNavigate();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl p-6 text-center max-w-sm">
        <h2 className="text-2xl font-bold text-blue-700">🎉 Success!</h2>
        <p className="mt-2 text-gray-700">
          Your registration has been successfully submitted!
        </p>
        <button
          onClick={() => {
              setShowSuccess(false);
              navigate("/personal-info"); // move to some other page
          }}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
        >
          OK
        </button>
      </div>
    </div>
  );
}
