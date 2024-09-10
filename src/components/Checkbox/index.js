import styles from "./styles.module.scss";

const Index = ({ text, checked = false, onChange }) => {
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
