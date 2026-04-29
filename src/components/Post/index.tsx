import { PostContainer, PostImage, PostText } from './Post.styles';

import PostComments from '../PostComments';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    imageUrl: string;
}

const Post = ({ children, imageUrl }: Props) => (
    <PostContainer data-testid="post">
        <PostImage data-testid="post-image" src={imageUrl} alt="post" />
        <PostText data-testid="post-text"> {children} </PostText>
        <PostComments />
    </PostContainer>
);

export default Post;