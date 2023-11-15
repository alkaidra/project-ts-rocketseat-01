import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

interface Author {
    avatarUrl: string;
    name: string;
    role: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;
}

export function Post({ post }: PostProps) {
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState<string>('');

    const handleCreateComment = (e: FormEvent) => {
        e.preventDefault();

        setComments([newComment, ...comments]);
        setNewComment('');
    };

    const deleteComment = (comment: string) => {
        const newCommentsList = comments.filter(item => {
            return item != comment
        })
        setComments(newCommentsList);
    }

    const handleNewCommentInvalid = (e: InvalidEvent<HTMLTextAreaElement>) => {
        e.target.setCustomValidity('Este campo é obrigatório!');
    }

    return (
        <article
            className={styles.post}
        >
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={format(post.publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })} dateTime={post.publishedAt.toISOString()}>{formatDistanceToNow(post.publishedAt, { locale: ptBR, addSuffix: true })}</time>
            </header>

            <div className={styles.content}>
                {post.content.map((item, key) => {
                    if (item.type === 'paragraph') {
                        return <p key={key}>{item.content}</p>;
                    } else if (item.type === 'link') {
                        return <p key={key}><a href="">{item.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    value={newComment}
                    onChange={(e) => {
                        e.target.setCustomValidity('');
                        setNewComment(e.target.value)
                    }}
                    placeholder='Deixe seu comentário...'
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button
                        type='submit'
                        disabled={newComment.length === 0}
                    >
                        Publicar
                    </button>
                </footer>
            </form>

            <div
                className={styles.commentsList}
            >
                {comments.map(content => (
                    <Comment
                        key={content}
                        content={content}
                        onDeleteComment={deleteComment}
                    />
                ))}
            </div>
        </article>
    );
}
