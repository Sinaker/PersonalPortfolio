import React from "react"
import styles from "./file.module.css";

interface FileProps {
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>; // Icon is a React component
}
export default function File({ title, icon: Icon }: FileProps) {
  return (

    <div className={styles.bar}>
      <span className={styles.logo}>
        <Icon />
      </span>
      <span>{title}</span>
    </div>
  );
}