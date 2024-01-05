import React, { useState, useEffect } from 'react';
import './Overview.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Overview() {
    const [posts, setPosts] = useState([]);
    const totalPosts = posts.length;

    useEffect(() => {
        // Define an async function within useEffect
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:3000/posts');
                console.log(response.data);
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        }

        // Immediately invoke the async function
        fetchData();
    }, []);

    return (
        <div className="inner-container-overview">
            <h1>Bekijk alle {totalPosts} posts op het platform</h1>
            <ul>
                {posts.map((post) => (
                    <li className="blogpost-overview" key={post.id}>
                        <h2>
                            <Link to={`/posts/${post.id}`} className="title-text">{post.title}</Link> ({post.author})
                        </h2>
                        <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Overview;