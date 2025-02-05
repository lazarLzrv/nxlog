import styles from "./styles.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type data = {
    text: string;
    disabled: boolean;
    icon: IconProp;
    onClick: () => void;
};

const Index = ({ text, disabled, icon, onClick }: data) => {
    return (
        <>
            <button
                className={styles.btn}
                disabled={disabled}
                onClick={onClick}
            >
                <FontAwesomeIcon icon={icon} />

                <span>{text}</span>
            </button>
        </>
    );
};

export default Index;
