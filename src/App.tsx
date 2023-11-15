import { Header } from './components/Header'

import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts: PostType[] = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/alkaidra.png',
            name: 'João',
            role: 'Software Engineer'
        },
        publishedAt: new Date(),
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: '👉 jane.design/doctorcare' },
        ]
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/diego3g.png',
            name: 'Diego Fernandes',
            role: 'CTO Rocketseat'
        },
        publishedAt: new Date('2021-03-10 12:00:00'),
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: '👉 jane.design/doctorcare' },
        ]
    },
    {
        id: 3,
        author: {
            avatarUrl: 'https://github.com/maykbrito.png',
            name: 'Mayk Brito',
            role: 'Instrutor Rocketseat'
        },
        publishedAt: new Date('2023-11-13 20:17:47'),
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: '👉 jane.design/doctorcare' },
        ]
    },
];

export default function App() {
    return (
        <div>
            <Header />

            <div
                className={styles.wrapper}
            >
                <Sidebar />
                <main>
                    {posts.map(post => (
                        <Post
                            key={post.id}
                            post={post}
                        />
                    ))}
                </main>
            </div>
        </div>
    )
}
