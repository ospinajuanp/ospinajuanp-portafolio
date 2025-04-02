import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import './MarkdownViewer.css'

const MarkDown = ({content}) => {
    return (
        <div className="markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]}
            components={{
                // Personaliza los encabezados
                h1: ({ node, ...props }) => <h1 className="md-title" {...props} />,
                h2: ({ node, ...props }) => <h2 className="md-subtitle" {...props} />,
                
                // Personaliza párrafos
                p: ({ node, ...props }) => <p className="md-paragraph" {...props} />,
                
                // Personaliza listas
                ul: ({ node, ...props }) => <ul className="md-list" {...props} />,
                ol: ({ node, ...props }) => <ol className="md-ordered-list" {...props} />,
                li: ({ node, ...props }) => <li className="md-list-item" {...props} />,
                
                // Personaliza bloques de código
                code: ({ node, inline, ...props }) => 
                  inline 
                    ? <code className="md-inline-code" {...props} /> 
                    : <code className="md-code-block" {...props} />,
                
                // Personaliza enlaces
                a: ({ node, ...props }) => <a className="md-link" {...props} />,
                
                // Personaliza imágenes
                img: ({ node, ...props }) => <img className="md-image" {...props} />
              }}>
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default MarkDown;