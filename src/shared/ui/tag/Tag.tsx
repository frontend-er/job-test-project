import cn from 'classnames';
import { TagStyled } from './styled';

type TagProps = {
  color?: string;
  name?: string;
  className?: string;
};

export function Tag(props: TagProps) {
  const {
    name,
    color,
    className
  } = props;

  const classes = cn(
    {
      tag: true,
      [`tag-${color}`]: color,
    },
    className,
  );

  return <TagStyled color={color} className={`${classes} btn`}  > {name} </TagStyled>;
}
