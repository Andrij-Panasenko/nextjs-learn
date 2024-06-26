import React from 'react'
import styles from './not-active-lable.module.css'

export interface NotActiveLableProps {
  children: React.ReactNode
}

export default function NotActiveLable({ children }: NotActiveLableProps) {
  return <>
    <span className={styles.label}>{children}</span>
  </>;
}