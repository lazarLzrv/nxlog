import * as React from "react";

import styles from "./styles.module.scss";

type data = {
    text: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Index = ({ text, checked = false, onChange }: data) => {
    return (
        <>
            <label className={styles.checkbox}>
                <input type='checkbox' name={text} checked={checked} onChange={onChange} />
                <span></span>
                {text}
            </label>
        </>
    );
};

export default Index;
