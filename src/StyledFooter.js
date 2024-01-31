import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: #eee;
    padding: 10px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 1rem; /* Adjust font size for smaller screens */
    }
    @media screen and (max-width: 375px) {
        grid-template-columns: 1fr; /* Change to a single column layout for screens <= 768px */
        padding: 0 10px; /* Further reduce padding for smaller screens */
    }
`;