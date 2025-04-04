import {  useState } from 'react';
import MarkdownViewer from '../MarkdownViewer/MarkdownViewer';
import MarkdownCreate from '../MarkdownCreate/MarkdownCreate';
import Mode from '../Mode/Mode';
import './AdminBlog.css'

const AdminBlog = () => {
    const [markdownContent, setMarkdownContent] = useState('');
    
    const handleMarkdownChange = (event) => {
        setMarkdownContent(event.target.value);
    };


    return (
        <div>
            <Mode/>
            <h1>Admin Blog</h1>
            <p>This page is under construction</p>
            <MarkdownCreate onMarkdownChange={handleMarkdownChange}/>
            <MarkdownViewer content={markdownContent}/>
        </div>
    );
};

export default AdminBlog;