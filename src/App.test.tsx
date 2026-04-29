import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App — renderização', () => {
    it('Deve renderizar o post', () => {
        render(<App />);
        expect(screen.getByTestId('post')).toBeInTheDocument();
    });

    it('Deve renderizar a imagem do post', () => {
        render(<App />);
        expect(screen.getByTestId('post-image')).toBeInTheDocument();
    });

    it('Deve renderizar o texto do post', () => {
        render(<App />);
        expect(screen.getByTestId('post-text')).toBeInTheDocument();
    });

    it('Deve renderizar a seção de comentários', () => {
        render(<App />);
        expect(screen.getByTestId('post-comments-list')).toBeInTheDocument();
    });
});

describe('App — conteúdo', () => {
    it('Deve exibir o texto correto do post', () => {
        render(<App />);
        expect(screen.getByTestId('post-text')).toHaveTextContent(
            'Olha só que legal minha miniatura do Batmóvel.'
        );
    });

    it('Deve exibir a URL da imagem do Batmóvel', () => {
        render(<App />);
        const image = screen.getByTestId('post-image');
        expect(image).toHaveAttribute(
            'src',
            'https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg'
        );
    });

    it('Deve iniciar sem comentários', () => {
        render(<App />);
        expect(screen.queryAllByTestId('post-comment')).toHaveLength(0);
    });
});

describe('App — integração completa', () => {
    it('Deve permitir adicionar um comentário', () => {
        render(<App />);
        fireEvent.change(screen.getByTestId('post-comment-input'), { target: { value: 'Que miniatura incrível!' } });
        fireEvent.click(screen.getByTestId('post-comment-submit'));
        expect(screen.getByText('Que miniatura incrível!')).toBeInTheDocument();
    });

    it('Deve acumular múltiplos comentários sem afetar o post', () => {
        render(<App />);
        const input = screen.getByTestId('post-comment-input');
        const submit = screen.getByTestId('post-comment-submit');

        fireEvent.change(input, { target: { value: 'Comentário 1' } });
        fireEvent.click(submit);
        fireEvent.change(input, { target: { value: 'Comentário 2' } });
        fireEvent.click(submit);

        expect(screen.getAllByTestId('post-comment')).toHaveLength(2);
        expect(screen.getByTestId('post-text')).toHaveTextContent('Olha só que legal minha miniatura do Batmóvel.');
        expect(screen.getByTestId('post-image')).toBeInTheDocument();
    });
});
