import styled from 'styled-components';

export const FormSection = styled.section`
    background-color: #16213e;
    padding: 32px 40px;
    border-bottom: 1px solid #0f3460;
`;

export const Form = styled.form`
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    gap: 16px;
    align-items: flex-end;
    flex-wrap: wrap;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1;
    min-width: 180px;
`;

export const FormLabel = styled.label`
    color: #aaa;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.8px;
`;

export const FormInput = styled.input`
    background-color: #1a1a2e;
    border: 1px solid #0f3460;
    border-radius: 6px;
    color: #fff;
    font-size: 14px;
    padding: 10px 14px;
    outline: none;
    transition: border-color 0.2s;

    &::placeholder {
        color: #555;
    }

    &:focus {
        border-color: #e94560;
    }
`;

export const FormSelect = styled.select`
    background-color: #1a1a2e;
    border: 1px solid #0f3460;
    border-radius: 6px;
    color: #fff;
    font-size: 14px;
    padding: 10px 14px;
    outline: none;
    cursor: pointer;
    transition: border-color 0.2s;

    option {
        background-color: #1a1a2e;
    }

    &:focus {
        border-color: #e94560;
    }
`;

export const FormButton = styled.button`
    background-color: #e94560;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 10px 28px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    white-space: nowrap;
    transition: background-color 0.2s;
    align-self: flex-end;

    &:hover {
        background-color: #c73652;
    }
`;
