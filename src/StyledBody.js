import styled from 'styled-components';
import BgBenner from './banner.jpg';

// Benner
export const BennerStyle = styled.section`
    width: auto;
    min-height: 80vh;
    background-image: url(${BgBenner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: grid;
    align-items: center;
    padding: 0 50px;
`;

export const ButtonStyle = styled.button`
    padding: 10px 40px;
    border-radius: 0.3rem;
    background: #3887BE;
    color: #FFFFFFF;
    font-weight: 500;
    border: none;
`;

export const BennerText = styled.div`
    font-size: 3.4rem;
    color: #3887BE;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export const BennerImg = styled.div`
    font-size: 3.4rem;
    color: #3887BE;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

// About
export const AboutStyle = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, auto));
    align-items: center;
    gap: 1.5rem;
    padding: 0 100px;
`;

export const AboutImg = styled.div`
    border-radius: 0.5rem;
`;

export const AboutHeading = styled.h2`
    font-size: 0.938rem;
    margin: 0.5rem 0 1.1rem;
`;

export const AboutText = styled.div`
    font-size: 0.938rem;
    margin: 0.5rem 0 1.1rem;
`;
