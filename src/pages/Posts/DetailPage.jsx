import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './DetailPage.css';
import axios from 'axios';
import { formatDate } from '../../helpers/FormatDate';

function DetailPage() {
    const { id } = useParams();
    const postId = parseInt(id, 10);

    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/posts/${postId}`);
                console.log(response.data);
                setPost(response.data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        fetchPost();
    }, [postId]);

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
