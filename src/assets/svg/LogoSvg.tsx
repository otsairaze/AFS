import { ComponentProps } from 'react';

export const LogoSvg = (props: ComponentProps<'svg'>) => {
  return (
    <svg
      {...props}
      viewBox='0 0 16 16'
      xmlns='http://www.w3.org/2000/svg'
      width={'50px'}
      height={'50px'}
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
      <g id='SVGRepo_iconCarrier'>
        <path
          d='M4 4C4 1.79086 5.79086 0 8 0C9.86384 0 11.4299 1.27477 11.874 3H12C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11H9V14H11V16H5V14H7V11H3.5C1.567 11 0 9.433 0 7.5C0 5.567 1.567 4 3.5 4H4Z'
          fill='var(--svg-primary)'
        ></path>
      </g>
    </svg>
  );
};
