import type {MouseEventHandler} from 'react'
import {clsx} from 'clsx'

import styles from './Button.module.scss'

interface IProps {
	text: string
	variant?: 'fill' | 'outlined'
	type?: 'submit' | 'reset' | 'button'
	className?: string
	onClick?: MouseEventHandler<HTMLButtonElement> | any
}

const Button = (props: IProps) => {
	const className = clsx(
		styles.button,
		props.variant === 'fill' && styles.fill,
		props.variant === 'outlined' && styles.outlined,
		!!props.className && props.className,
	)

	const type = props.type ?? 'button'

	return (
		<button className={className} type={type} onClick={props.onClick}>
			{props.text}
		</button>
	)
}

export default Button
