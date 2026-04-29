import styled from 'styled-components';

export const VagaCard = styled.article`
    background-color: #16213e;
    border: 1px solid #0f3460;
    border-radius: 12px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: border-color 0.2s, transform 0.2s;

    &:hover {
        border-color: #e94560;
        transform: translateY(-2px);
    }
`;

export const VagaHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;
`;

export const VagaTitulo = styled.h3`
    color: #fff;
    font-size: 17px;
    font-weight: 600;
    line-height: 1.3;
`;

type TipoBadgeProps = {
    tipo: 'CLT' | 'PJ' | 'Freelance';
};

const tipoColors: Record<string, string> = {
    CLT: '#27ae60',
    PJ: '#2980b9',
    Freelance: '#8e44ad',
};

export const TipoBadge = styled.span<TipoBadgeProps>`
    background-color: ${({ tipo }) => tipoColors[tipo] ?? '#555'};
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    padding: 3px 10px;
    border-radius: 20px;
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const VagaEmpresa = styled.p`
    color: #e94560;
    font-size: 13px;
    font-weight: 600;
`;

export const VagaMeta = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
`;

export const MetaItem = styled.span`
    color: #aaa;
    font-size: 13px;

    &::before {
        margin-right: 4px;
    }
`;

export const VagaDescricao = styled.p`
    color: #ccc;
    font-size: 13px;
    line-height: 1.6;
    flex: 1;
`;

export const VagaFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
`;

export const VagaSalario = styled.strong`
    color: #27ae60;
    font-size: 14px;
`;

export const VagaButton = styled.button`
    background-color: transparent;
    border: 1px solid #e94560;
    color: #e94560;
    border-radius: 6px;
    padding: 7px 18px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;

    &:hover {
        background-color: #e94560;
        color: #fff;
    }
`;
