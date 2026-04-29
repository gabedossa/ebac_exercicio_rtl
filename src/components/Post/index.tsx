import styles from './Post.module.css';

import PostComments from '../PostComments';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    imageUrl: string;
}

const Post = ({ children, imageUrl }: Props) => (
    <div data-testid="post" className={styles.post}>
        <img data-testid="post-image" className={styles['post-image']} src={imageUrl} alt="post" />
        <p data-testid="post-text" className={styles['post-text']}> {children} </p>
        <PostComments />
    </div>
);

export default Post;