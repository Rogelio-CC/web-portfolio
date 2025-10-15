// General imports
import ReactDom from 'react-dom';
import { IoMdClose } from "react-icons/io";
import '../relevantProjects/imageProjectModal.css';


// Props definition for the ImageProjectModal component
type ImageProjectModalProps = {
    open: boolean; // Determines if the modal is visible
    onClose: () => void; // Function to close the modal
    imgSrc: string; // Source URL of the image to display
};

const ImageProjectModal: React.FC<ImageProjectModalProps> = ({ open, onClose, imgSrc }) => {
    // If modal is not open, render nothing
    if (!open) return null;
    
    // Render the modal using React Portal
    return ReactDom.createPortal(
        <div className="imageModal">
            <IoMdClose className="closeIcon" onClick={onClose} />
            {/* Enlarged image */}
            <img src={imgSrc} alt="Image expanded" className="imageModalImg" />
        </div>,
        document.body
    );
}

export default ImageProjectModal;