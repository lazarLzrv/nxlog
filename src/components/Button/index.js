import styles from "./styles.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Index = ({ text, disabled, icon, onClick }) => {
    return (
        <>
            <button className={styles.btn} disabled={disabled} onClick={onClick}>
                <FontAwesomeIcon icon={icon} />

                <span>{text}</span>
            </button>
        </>
    );
};

export default Index;
