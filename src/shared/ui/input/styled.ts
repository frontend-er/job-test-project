import { styled } from 'styled-components';


export const InputStyled = styled.input`
   width: 100%;
   height: 40px;
   border: 1px solid #e5e5e5;
   border-radius: 4px;
   padding: 0 10px;
   font-size: 14px;
   line-height: 40px;
   color: #333;
   outline: none;
   margin-bottom: 10px;
   transition: border-color 0.3s ease-in-out;
   &:focus {
      border-color: #333;
   }
`;