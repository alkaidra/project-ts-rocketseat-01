import { ThumbsUp, Trash } from '@phosphor-icons/react/dist/ssr';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [like, setLike] = useState(0);

    const handleDeleteComment = () => {
        onDeleteComment(content);
    }

    const handleLike = () => {
        setLike((state) => {
            return state + 1
        });
    }

    return (
        <div
            className={styles.comment}
        >
            <Avatar
                src="https://github.com/diego3g.png"
                hasBorder={false}
            />
            <div
                className={styles.commentBox}
            >
                <div
                    className={styles.commentContent}
                >
                    <header>
                        <div
                            className={styles.authorAndTime}
                        >
                            <strong>Diego Fernandes</strong>
                            <time title="13 de novembro de 2023 às 18:58" dateTime="2023-11-13 18:58:27">Cerca de 1 hora atrás</time>
                        </div>

                        <button
                            title='Deletar comentário'
                            type='button'
                            onClick={handleDeleteComment}
                        >
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>

                </div>

                <footer>
                    <button
                        title='Curtir comentário'
                        type='button'
                        onClick={handleLike}
                    >
                        <ThumbsUp size={24} />
                        Aplaudir <span>{like}</span>
                    </button>
                </footer>

            </div>


        </div>
    );
}