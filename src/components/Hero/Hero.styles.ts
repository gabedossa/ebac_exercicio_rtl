import styled from 'styled-components';

export const HeroSection = styled.section`
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%);
    padding: 80px 40px;
    text-align: center;
`;

export const HeroTitle = styled.h1`
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 16px;
    line-height: 1.2;

    span {
        color: #e94560;
    }
`;

export const HeroSubtitle = styled.p`
    color: #aaa;
    font-size: 18px;
    margin-bottom: 40px;
    max-width: 540px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
`;

export const HeroStats = styled.div`
    display: flex;
    justify-content: center;
    gap: 48px;
    margin-top: 48px;
`;

export const StatItem = styled.div`
    text-align: center;
`;

export const StatNumber = styled.strong`
    display: block;
    font-size: 32px;
    color: #e94560;
    font-weight: 700;
`;

export const StatLabel = styled.span`
    font-size: 13px;
    color: #aaa;
    text-transform: uppercase;
    letter-spacing: 1px;
`;
