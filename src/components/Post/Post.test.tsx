import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';

describe('Post — renderização', () => {
    it('Deve renderizar o container do post', () => {
        render(<Post imageUrl="https://example.com/img.jpg">Texto</Post>);
        expect(screen.getByTestId('post')).toBeInTheDocument();
    });

    it('Deve renderizar a imagem', () => {
        render(<Post imageUrl="https://example.com/img.jpg">Texto</Post>);
        expect(screen.getByTestId('post-image')).toBeInTheDocument();
    });

    it('Deve renderizar o texto do post', () => {
        render(<Post imageUrl="https://example.com/img.jpg">Texto</Post>);
        expect(screen.getByTestId('post-text')).toBeInTheDocument();
    });

    it('Deve renderizar a seção de comentários', () => {
        render(<Post imageUrl="https://example.com/img.jpg">Texto</Post>);
        expect(screen.getByTestId('post-comments-list')).toBeInTheDocument();
    });
});

describe('Post — imagem', () => {
    it('Deve exibir a URL da imagem corretamente', () => {
        const imageUrl = 'https://example.com/foto.jpg';
        render(<Post imageUrl={imageUrl}>Texto</Post>);
        expect(screen.getByTestId('post-image')).toHaveAttribute('src', imageUrl);
    });

    it('Deve exibir o atributo alt na imagem', () => {
        render(<Post imageUrl="https://example.com/img.jpg">Texto</Post>);
        expect(screen.getByTestId('post-image')).toHaveAttribute('alt');
    });
});

describe('Post — conteúdo (children)', () => {
    it('Deve exibir o texto passado como children', () => {
        render(<Post imageUrl="https://example.com/img.jpg">Olá mundo</Post>);
        expect(screen.getByTestId('post-text')).toHaveTextContent('Olá mundo');
    });

    it('Deve exibir children diferente para cada instância', () => {
        const { unmount } = render(<Post imageUrl="https://example.com/img.jpg">Post A</Post>);
        expect(screen.getByTestId('post-text')).toHaveTextContent('Post A');
        unmount();

        render(<Post imageUrl="https://example.com/img.jpg">Post B</Post>);
        expect(screen.getByTestId('post-text')).toHaveTextContent('Post B');
    });
});

describe('Post — integração com comentários', () => {
    it('Deve permitir adicionar um comentário dentro do Post', () => {
        render(<Post imageUrl="https://example.com/img.jpg">Texto</Post>);
        fireEvent.change(screen.getByTestId('post-comment-input'), { target: { value: 'Comentário integrado' } });
        fireEvent.click(screen.getByTestId('post-comment-submit'));
        expect(screen.getByText('Comentário integrado')).toBeInTheDocument();
    });

    it('Deve acumular comentários sem apagar o conteúdo do post', () => {
        render(<Post imageUrl="https://example.com/img.jpg">Texto do post</Post>);
        const input = screen.getByTestId('post-comment-input');
        const submit = screen.getByTestId('post-comment-submit');

        fireEvent.change(input, { target: { value: 'Comentário 1' } });
        fireEvent.click(submit);
        fireEvent.change(input, { target: { value: 'Comentário 2' } });
        fireEvent.click(submit);

        expect(screen.getByTestId('post-text')).toHaveTextContent('Texto do post');
        expect(screen.getAllByTestId('post-comment')).toHaveLength(2);
    });
});
