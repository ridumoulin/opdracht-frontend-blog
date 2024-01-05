import React from 'react';
import './NewPosts.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function NewPosts() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    function handleFormSubmit(data) {
        const enrichedData = {
            title: data.title,
            subtitle: data['sub-title'],
            content: data['blogpost-content'],
            author: data.name,
            created: new Date().toISOString(),
            readTime: calculateReadTime(data['blogpost-content']),
            comments: 0,
            shares: 0,
        };
        console.log(enrichedData);
        navigate('/overview');
    }

    function calculateReadTime(content) {
        const wordsPerMinute = 100;
        const wordCount = content.split(/\s+/).length;

        return Math.round(wordCount / wordsPerMinute);
    }

    return (
        <div className="inner-container-new-post">

            <h1>Post toevoegen</h1>
            <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
            <label htmlFor="title-field">
                Title
            </label>
                <input
                    type="text"
                    {...register("title", {
                        required: {
                            value: true,
                            message: 'Dit veld is verplicht',
                        },
                    })}
                    id="title-field"
                />
                {errors.title && <p>{errors.title.message}</p>}

            <label htmlFor="sub-title-field">
                Subtitle
            </label>

                <input
                    type="text"
                    {...register("sub-title", {
                        required: {
                            value: true,
                            message: 'Dit veld is verplicht',
                        },
                    })}
                    id="sub-title-field"
                />
                {errors['sub-title'] && <p>{errors['sub-title'].message}</p>}

            <label htmlFor="name-field">
                Naam en achternaam
            </label>
                <input
                    type="text"
                    {...register("name", {
                        required: {
                            value: true,
                            message: 'Dit veld is verplicht',
                        },
                    })}
                    id="name-field"
                />
                {errors.name && <p>{errors.name.message}</p>}

            <label htmlFor="blogpost-field">
                Blogpost
            </label>
                <textarea
                    id="blogpost-field"
                    rows="4"
                    cols="40"
                    {...register("blogpost-content", {
                        required: {
                            value: true,
                            message: 'Dit veld is verplicht',
                        },
                        minLength: {
                            value: 300,
                            message: 'Input moet minstens 300 karakters bevatten',
                        },
                        maxLength: {
                            value: 2000,
                            message: 'Input mag maximaal 2000 karakters bevatten',
                        },
                    })}
                ></textarea>
                {errors['blogpost-content'] && <p>{errors['blogpost-content'].message}</p>}


            <button type="submit">
                Toevoegen
            </button>

            </form>
        </div>
    );
}

export default NewPosts;