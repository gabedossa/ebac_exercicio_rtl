import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('PostComments — renderização inicial', () => {
    it('Deve exibir o botão de envio', () => {
        render(<PostComment />);
        expect(screen.getByTestId('post-comment-submit')).toBeInTheDocument();
    });

    it('Deve exibir o campo de texto', () => {
        render(<PostComment />);
        expect(screen.getByTestId('post-comment-input')).toBeInTheDocument();
    });

    it('Deve iniciar com a lista de comentários vazia', () => {
        render(<PostComment />);
        expect(screen.queryAllByTestId('post-comment')).toHaveLength(0);
    });

    it('Deve iniciar com o campo de texto vazio', () => {
        render(<PostComment />);
        const input = screen.getByTestId('post-comment-input') as HTMLTextAreaElement;
        expect(input.value).toBe('');
    });

    it('O campo de texto deve ser obrigatório', () => {
        render(<PostComment />);
        expect(screen.getByTestId('post-comment-input')).toBeRequired();
    });
});

describe('PostComments — interação com o campo de texto', () => {
    it('Deve atualizar o valor ao digitar', () => {
        render(<PostComment />);
        const input = screen.getByTestId('post-comment-input') as HTMLTextAreaElement;
        fireEvent.change(input, { target: { value: 'Novo comentário' } });
        expect(input.value).toBe('Novo comentário');
    });

    it('Deve limpar o campo após enviar o comentário', () => {
        render(<PostComment />);
        const input = screen.getByTestId('post-comment-input') as HTMLTextAreaElement;
        fireEvent.change(input, { target: { value: 'Comentário de teste' } });
        fireEvent.click(screen.getByTestId('post-comment-submit'));
        expect(input.value).toBe('');
    });
});

describe('PostComments — inserção de comentários', () => {
    it('Deve adicionar um comentário na lista', () => {
        render(<PostComment />);
        fireEvent.change(screen.getByTestId('post-comment-input'), { target: { value: 'Meu comentário' } });
        fireEvent.click(screen.getByTestId('post-comment-submit'));
        expect(screen.getAllByTestId('post-comment')).toHaveLength(1);
        expect(screen.getByText('Meu comentário')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários na lista', () => {
        render(<PostComment />);
        const input = screen.getByTestId('post-comment-input');
        const submit = screen.getByTestId('post-comment-submit');

        fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(submit);

        fireEvent.change(input, { target: { value: 'Segundo comentário' } });
        fireEvent.click(submit);

        expect(screen.getAllByTestId('post-comment')).toHaveLength(2);
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });

    it('Deve adicionar três comentários mantendo a ordem de inserção', () => {
        render(<PostComment />);
        const input = screen.getByTestId('post-comment-input');
        const submit = screen.getByTestId('post-comment-submit');

        ['Primeiro', 'Segundo', 'Terceiro'].forEach(texto => {
            fireEvent.change(input, { target: { value: texto } });
            fireEvent.click(submit);
        });

        const itens = screen.getAllByTestId('post-comment');
        expect(itens).toHaveLength(3);
        expect(itens[0]).toHaveTextContent('Primeiro');
        expect(itens[1]).toHaveTextContent('Segundo');
        expect(itens[2]).toHaveTextContent('Terceiro');
    });
});
