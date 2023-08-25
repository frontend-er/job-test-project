import { styled } from 'styled-components';

export const TagStyled = styled.span<{ color?: string }>`
   display: inline-block;
   padding: 3px 10px;
   border-radius: 20px;
   background-color: ${({ color }) => color || '#333'};
   color: #fff;
   font-size: 12px;
   cursor: default;
   margin-right: 10px;
   margin-bottom: 2px;
`;