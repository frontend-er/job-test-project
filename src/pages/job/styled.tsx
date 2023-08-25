import { styled } from "styled-components";

export const JobPage = styled.div`
  padding: 20px;
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const JobContent = styled.div`
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 20px;
`;

export  const JobDetails = styled.div`
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  .description {
      font-size: 16px;
      margin-bottom: 20px;
   }
  
  p {
    margin-bottom: 2px !important;
    font-size: 12px !important; 
  }
`;

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  
  h5 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  li {
    display: inline-block;
    background-color: #ddd;
    color: #333;
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 20px;
  }
`;