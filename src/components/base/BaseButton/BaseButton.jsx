import styles from "./style.module.scss"

// Переиспользуемый UI компонент для кнопки
export default function BaseButton({
                                       width = 100,
                                       type = "primary",
                                       classes = "",
                                       disabled = false,
                                       ...props
                                   }) {
    const btnsCls = [styles.button, classes]
    if (type === "link") {
        btnsCls.push(styles.button__link)
    }
    return (
        <>
            <div
                className={styles.button__wrap}
                style={{width: width + "%"}}
            >
                <button
                    className={btnsCls.join(" ")}
                    disabled={disabled}
                    {...props}
                >
                    {props.children}
                </button>
            </div>
        </>
    )
}
