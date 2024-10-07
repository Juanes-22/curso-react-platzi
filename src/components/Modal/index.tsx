import ReactDOM from 'react-dom';
import './styles.css'

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({children}) => {
  const modalRoot = document.getElementById('modal');
  if (!modalRoot) {
    throw new Error('The modal root element is not found in the DOM');
  }

  return ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,
    modalRoot,
  );
};

export default Modal;
