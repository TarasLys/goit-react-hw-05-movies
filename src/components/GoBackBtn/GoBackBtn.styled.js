import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const GoBackButton = styled(Link)`
  color: blue;
    text-decoration: none;
    font-weight: bold;
    padding: 10px;
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 255, 0.5);
    transition: color 0.5s ease-in-out;
    width: 65px;

    &:hover {
        color: lightblue;
    }
`;




