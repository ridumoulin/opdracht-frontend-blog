import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DetailPage.css';
import posts from '../../constants/data.json';
import { formatDate } from '../../helpers/FormatDate';

function DetailPage() {
    const { id } = useParams();
    const postId = parseInt(id, 10);
    const post = posts.find((post) => post.id === postId);

    if (!post) {
        return <p>Post not found</p>;
    }

    return (
        <div className="inner-container-detail-page">
            <div className="detail-blogpost">
                <h1>{post.title} ({post.readTime} minuten)</h1>
                <h2>Geschreven door {post.author} op {formatDate(post.created)}</h2>
                <p>{post.content}</p>
                <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                <p>
                    <Link className="link-text" to="/Overview">Terug naar overzichtspagina</Link>
                </p>
            </div>
        </div>
    );
}

export default DetailPage;