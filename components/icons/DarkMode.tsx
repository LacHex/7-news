import type { SVGAttributes } from 'react'

interface DarkModeProps extends SVGAttributes<SVGElement> {
  size?: string | number
}

const DarkMode = ({
  fill = 'currentColor',
  size,
  ...props
}: DarkModeProps): JSX.Element => {
  props = {
    width: size,
    height: size,
    ...props
  }

  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path
        fill={fill}
        d="M24 42q-7.5 0-12.75-5.25T6 24q0-6.75 3.975-11.45Q13.95 7.85 20.4 6.5q2.05-.4 2.8.7t-.05 3q-.45 1.15-.7 2.35-.25 1.2-.25 2.45 0 4.5 3.15 7.65Q28.5 25.8 33 25.8q1.25 0 2.425-.225 1.175-.225 2.275-.625 2.15-.8 3.2.075 1.05.875.55 2.975-1.35 6.05-6.05 10.025Q30.7 42 24 42Zm0-3q5.45 0 9.5-3.375t5.05-7.925q-1.25.55-2.675.825Q34.45 28.8 33 28.8q-5.75 0-9.775-4.025T19.2 15q0-1.2.25-2.575.25-1.375.9-3.125-4.9 1.35-8.125 5.475Q9 18.9 9 24q0 6.25 4.375 10.625T24 39Zm-.2-14.85Z"
      />
    </svg>
  )
}

export default DarkMode
