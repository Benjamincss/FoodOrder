import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 20px;
    min-height: 100vh;
    width: 100%;
    box-sizing: border-box;
`;

const Title = styled.h1`
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #333;
`;

const OptionsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const OptionCard = styled.div`
    width: 150px;
    height: 150px;
    background-color: ${props => (props.selected ? '#E41C2A' : '#f5f5f5')};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

const OptionImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
`;

const OptionName = styled.p`
    font-size: 1.2em;
    color: ${props => (props.selected ? '#fff' : '#555')};
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 400px;
    margin-top: 20px;
`;

const Button = styled.button`
    background-color: #E41C2A;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #E41C2A;
    }
`;

const CustomPage = ({ options }) => {
    const steps = ['meat', 'sauce' , 'dessert'];
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [filteredOptions, setFilteredOptions] = useState([]);


    useEffect(() => {
        setCurrentStep(0);
    }, []);


    useEffect(() => {

        if (options.length > 0) {
            const filtered = options.filter(option => option.type === steps[currentStep]);
            setFilteredOptions(filtered || []);
        }


    }, [currentStep, options]);

    const handleOptionSelect = (optionId) => {
        setSelectedOptions(prevState =>
            prevState.includes(optionId)
                ? prevState.filter(id => id !== optionId)
                : [...prevState, optionId]
        );
    };

    const handleNext = () => {
        let nextStep = currentStep + 1;
        while (nextStep < steps.length && !options.some(option => option.type === steps[nextStep])) {
            nextStep++;
        }

        if (nextStep < steps.length) {
            setCurrentStep(nextStep);
        } else {
            alert('Toutes les étapes sont terminées!');
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <Container>
            <Title>Choisissez vos {steps[currentStep]}</Title>
            <OptionsGrid>
                {filteredOptions.map(option => (
                    <OptionCard
                        key={option.id}
                        selected={selectedOptions.includes(option.id)}
                        onClick={() => handleOptionSelect(option.id)}
                    >
                        <OptionImage src={option.image} alt={option.name} />
                        <OptionName selected={selectedOptions.includes(option.id)}>
                            {option.name}
                        </OptionName>

                        <p>Type: {option.type}</p>
                    </OptionCard>
                ))}
            </OptionsGrid>
            <ButtonContainer>
                {currentStep > 0 && <Button onClick={handlePrevious}>Retour</Button>}
                <Button onClick={handleNext}>Suivant</Button>
            </ButtonContainer>
        </Container>
    );
};

export default CustomPage;
