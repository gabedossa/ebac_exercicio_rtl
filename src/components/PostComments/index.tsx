import { ChangeEvent, FormEvent, useState } from 'react';
import {
    CommentsList,
    CommentItem,
    CommentContent,
    CommentsForm,
    CommentsTextarea,
    CommentsButton,
} from './PostComments.styles';

import Comment from '../../models/Comment';

const Post = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [tempComment, setTempComment] = useState('');

    function handleAddComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newComment = new Comment(comments.length, tempComment);
        setTempComment('');
        setComments([...comments, newComment]);
    }

    return (
        <div>
            <CommentsList data-testid="post-comments-list">
                {comments.map(({ comment, id }) => (
                    <CommentItem data-testid="post-comment" key={id}>
                        <CommentContent>
                            {comment}
                        </CommentContent>
                    </CommentItem>
                ))}
            </CommentsList>
            <CommentsForm onSubmit={handleAddComment}>
                <CommentsTextarea data-testid="post-comment-input" value={tempComment} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setTempComment(e.target.value)} required />
                <CommentsButton data-testid="post-comment-submit" type="submit">
                    Comentar
                </CommentsButton>
            </CommentsForm>
        </div>
    );
}

export default Post;