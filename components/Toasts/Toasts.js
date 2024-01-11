import { toast } from 'react-toastify';

export const successToast = (message) => {
  toast.success(` ${message?.length > 0 ? message : 'Success'}`, { autoClose: 3000 });
};

export const errorToast = (message) => {
  toast.error(`Error-  ${message?.length > 0 ? message : 'Error'}`, { autoClose: 3000 });
};
export const warning = (message) => {
  toast.warning(`Error-  ${message?.length > 0 ? message : 'Error'}`, { autoClose: 3000 });
};
