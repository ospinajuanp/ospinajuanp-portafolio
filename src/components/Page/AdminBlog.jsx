import { useEffect, useState } from 'react';
import MarkdownViewer from '../MarkdownViewer/MarkdownViewer';
import MarkdownCreate from '../MarkdownCreate/MarkdownCreate';
import './AdminBlog.css'

const AdminBlog = () => {
    const [markdownContent, setMarkdownContent] = useState('');
    
    const handleMarkdownChange = (event) => {
        setMarkdownContent(event.target.value);
    };


    return (
        <div>
            <h1>Mi Nueva Página</h1>
            <MarkdownCreate onMarkdownChange={handleMarkdownChange}/>
            <MarkdownViewer content={markdownContent}/>
        </div>
    );
};

export default AdminBlog;