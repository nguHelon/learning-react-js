import React, { useState } from 'react'
import { postAdded } from './postsSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChange = e => setTitle(e.target.value);
    const onContentChange = e => setContent(e.target.value);

    const dispatch = useDispatch();

    function onSavePostClicked() {
        if (title && content) {
            dispatch(postAdded({ id: nanoid(), title, content }))
        }

        setTitle('');
        setContent('');
    }

    return (
        <section>
            <h2>Add a new Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type='text'
                    id='postTitle'
                    name="postTitle"
                    value={title}
                    onChange={onTitleChange}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChange}
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                >
                    Save Post
                </button>
            </form>
        </section>
    )
}

export default AddPostForm