import styled from 'styled-components';
import BgBenner from './banner.jpg';
import './fonts/Cyborg Punk.ttf';


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
    text-align: center;
    padding-bottom: 10px;

    @media screen and (max-width: 768px) {
        padding: 0 20px; /* Adjust padding for smaller screens */
    }

    @media screen and (max-width: 576px) {
        padding: 0 10px; /* Further reduce padding for mobile screens */
    }
`;

export const ButtonStyle = styled.button`
    padding: 10px 40px;
    border-radius: 0.3rem;
    background: #3887BE;
    color: #FFFFFFF;
    font-weight: 500;
    border: none;

    &:hover {
        cursor: pointer;
        background: #FFFFFF;
        color: #3887BE;
        border-color: #3887BE;
        border: 2px solid;
    }

    @media screen and (max-width: 768px) {
        font-size: 1rem; /* Adjust font size for smaller screens */
    }
`;

export const BennerText = styled.div`
    font-size: 3.4rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Cyborg Punk';
    background-image: linear-gradient(to right, #ee9ca7, #ffdde1);
    color: transparent;
    display: inline-block;
    background-clip: text;

    @media screen and (max-width: 768px) {
        font-size: 2rem; /* Adjust font size for smaller screens */
    }
`;

export const CardBody = styled.div`
    background-image: linear-gradient(to right, #0F2027, #203A43, #2C5364);
`;

export const CardTitle = styled.div`
    background-image: linear-gradient(to right, #2980B9, #6DD5FA, #FFFFFF);
    color: transparent;
    display: inline-block;
    background-clip: text;
`;

export const CardText = styled.div`
    background-image: linear-gradient(to right, #2980B9, #6DD5FA, #FFFFFF);
    color: transparent;
    display: inline-block;
    background-clip: text;
`;

export const CardHarga = styled.div`
    background-image: linear-gradient(to right, #FFEFBA, #FFFFFF);
    color: transparent;
    display: inline-block;
    background-clip: text;
    font-size: 1.2rem;

    @media screen and (max-width: 768px) {
        font-size: 1rem; /* Adjust font size for smaller screens */
    }
`;

export const UlStyle = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-self: end;

    @media screen and (max-width: 768px) {
        display: none; /* Hide the navigation for smaller screens */
    }
`;

export const AStyle = styled.a`
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.3s ease-out;
    padding-top: 10px;
    font-family: 'Mario-Kart-DS';
    background-image: linear-gradient(to right, #ee9ca7, #ffdde1);
    color: transparent;
    display: inline-block;
    background-clip: text;

    @media screen and (max-width: 768px) {
        font-size: 1rem; /* Adjust font size for smaller screens */
    }
`;

export const LogoStyle = styled.h3`
    color: #000000;
    font-family: 'Mario-Kart-DS';
    font-size: 1.5rem;

    @media screen and (max-width: 768px) {
        font-size: 1.2rem; /* Adjust font size for smaller screens */
    }
`;

// Testimoni
export const TestiStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, auto));
    gap: 1.5rem;
    margin-top: 2rem;
    padding: 0 20px;

    .box {
        padding: 20px;
        border-radius: 0.5rem;
        text-align: center;
        background: #3887BE;

        p {
            font-size: 0.938rem;
        }
        
        h2 {
            font-size: 1.2rem;
            font-weight: 600;
            margin: 0.5rem 0 0.5rem;
        }
    }
`;

export const TestiForm = styled.div`
    width: 500px;
    margin: 0 auto;
  
    label {
        display: block;
        margin-bottom: 10px;
    }
    
    input[type="text"],
    textarea {
        width: 100%;
        padding: 5px;
        margin-bottom: 10px;
    }
    
    input[type="submit"] {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
    }
`;
