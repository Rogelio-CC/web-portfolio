// General imports
import ReactDom from 'react-dom';
import { useTranslation } from 'react-i18next'; // useTranslation hook imported to enable translations
import '../navbar/contactModal.css';

// Props definition for the ContactModal component
type ContactModalProps = {
    open: boolean; // Determines if the modal is visible
    onClose: () => void; // Function to close the modal
};

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
    const { t } = useTranslation(); // useTranslation hook enabled

    // If modal is not open, render nothing
    if (!open) return null;
    
    // Render the modal using React Portal
    return ReactDom.createPortal(
        <div className="modalOverlay">
            <div className="modalContent">
                <h2>{t("navbar.contactMe")}</h2>
                <p><strong>{t("navbar.email")}:</strong> rogelioceballos218@gmail.com</p>
                <p><strong>{t("navbar.phone")}:</strong> (+52) 477 600 1390</p>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>,
        document.body
    );
}

export default ContactModal;