import { InputHTMLAttributes } from 'react';
import cn from 'classnames';
import { InputStyled } from './styled';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  color?: 'primary' | 'secondary';
  variant?: 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

export function Input(props: InputProps) {
  const {
    type = 'textbox',
    color = 'primary',
    size = 'sm',
    variant,
    className,
    ...other
  } = props;

  const classes = cn(
    {
      input: true,
      [`input-${color}`]: color && !variant,
      [`input-${variant}-${color}`]: color && variant,
      [`input-${size}`]: size,
    },
    className,
  );

  return <InputStyled className={`${classes} input`} type={type} {...other} />;
}
