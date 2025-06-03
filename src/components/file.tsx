import React from "react";
import styles from "./file.module.css";

interface FileProps {
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isActive?: boolean;
}

export default function File({ title, icon: Icon, isActive }: FileProps) {
  return (
    <div className={`${styles.bar} ${isActive ? styles.activeFile : ''}`}>
      <span className={styles.logo}>
        <Icon />
      </span>
      <span>{title}</span>
    </div>
  );
}
