import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="w-full max-w-md mx-auto px-4 mt-8 animate-shake">
      <div className="relative group">
        {/* <div className="absolute -inset-0.5 bg-linear-to-r from-red-400 to-pink-400 rounded-2xl blur opacity-40"></div> */}
        <div className="relative backdrop-blur-xl bg-red-500/20 border border-red-400/30 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-start space-x-4">
            <div className="shrink-0">
              <div className="w-10 h-10 bg-red-500/50 rounded-full flex items-center justify-center">
                <span className="text-2xl s">⚠️</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg  font-semibold text-red-100 mb-1">
                Oops!
              </h3>
              <p className="text-sm text-red-200/90">{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;