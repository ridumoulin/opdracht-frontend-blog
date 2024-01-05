import React from 'react';
import './Overview.css';
import posts from '../../constants/data.json';
import { Link } from 'react-router-dom';

function Overview() {
    const totalPosts = posts.length;

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