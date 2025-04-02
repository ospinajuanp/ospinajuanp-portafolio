import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import './MarkdownViewer.css'

const MarkDown = ({content}) => {
    return (
        <div className="markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default MarkDown;