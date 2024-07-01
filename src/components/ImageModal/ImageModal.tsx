import Modal from 'react-modal';
import { CSSProperties, FC } from 'react';


Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
}

interface ModalStyle {
    overlay?: React.CSSProperties;
    content?: React.CSSProperties;
  }

const ImageModal: FC<ImageModalProps> = ({ isOpen, onClose, imageUrl })=> {
    const customStyles: ModalStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
    return (
            <Modal
                isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
            >
                <img src={imageUrl} alt="Large" />
            </Modal>

    )
}

export default ImageModal;