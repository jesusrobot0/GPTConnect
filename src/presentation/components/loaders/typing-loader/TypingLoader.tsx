import styles from "./typing-loader.module.css";

interface Props {
  className?: string;
}

export function TypingLoader({ className }: Props) {
  return (
    <div className={`${styles.typing} ${className}`}>
      <div className={`${styles.circle} ${styles.scaling}`}></div>
      <div className={`${styles.circle} ${styles.scaling}`}></div>
      <div className={`${styles.circle} ${styles.scaling}`}></div>
    </div>
  );
}
