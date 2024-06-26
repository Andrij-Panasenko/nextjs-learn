import React from 'react'
import styles from './active-lable.module.css'

export interface ActiveLableProps {
  children: React.ReactNode
}

console.log(styles)

export default function ActiveLable({ children }: ActiveLableProps) {
  return <>
    <span className={styles.label}>{children}</span>
  </>;
}