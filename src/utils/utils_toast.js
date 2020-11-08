import { toast } from 'react-toastify';

export const showError = (message, onClose) => {
  toast.dismiss();
  toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
    onOpen: onClose ? onClose : () => {},
  });
};

export const showSuccess = (message, onClose) => {
  toast.dismiss();
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
    onOpen: onClose ? onClose : () => {},
  });
};

export const showInfo = (message) => {
  toast.dismiss();
  toast.info(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  });
};
