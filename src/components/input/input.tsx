import React from "react";
import styles from "@/styles/Input.module.css";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  width?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  required = false,
  width = "100%", // デフォルト値を設定
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={styles.input}
      style={{ width }}
    />
  );
};

export default Input;

