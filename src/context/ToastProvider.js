import { useContext, createContext } from "react";
import toast from "react-hot-toast";

const nullFn = () => null;
const ToastContext = createContext({
  success: nullFn,
  error: nullFn,
});
export const useToast = () => useContext(ToastContext);
export const ToastProvider = ({ children }) => {
  const toastStyle = {
    position: "top-right",
    className: "font-semibold text-xl border-red-600 bg-black border-2 p-5",
    style: {
      minWidth: "250px",
      minHeight: "70px",
    },
  };
  const success = (message) => toast.success(message, toastStyle);
  const error = (message) => toast.error(message, { ...toastStyle });
  const values = {
    success,
    error,
  };
  return (
    <ToastContext.Provider value={values}>{children}</ToastContext.Provider>
  );
};
