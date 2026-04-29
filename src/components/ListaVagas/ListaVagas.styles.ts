import styled from 'styled-components';

export const Section = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 48px 40px;
`;

export const SectionHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 32px;
`;

export const SectionTitle = styled.h2`
    color: #fff;
    font-size: 24px;
    font-weight: 700;
`;

export const ResultCount = styled.span`
    color: #aaa;
    font-size: 14px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
`;

export const EmptyMessage = styled.p`
    color: #aaa;
    font-size: 16px;
    text-align: center;
    padding: 48px 0;
    grid-column: 1 / -1;
`;
