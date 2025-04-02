import  { useRef, useState } from "react";
import "./MarkdownCreate.css"

const MarkdownCreate = ({onMarkdownChange}) => {
    const textareaRef = useRef(null);
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        const textarea = textareaRef.current;
        setValue(event.target.value);

        // Autoajustar altura
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;

        onMarkdownChange(event);
    };
    const clear = () => {
        setValue(""); // <- esto limpia el textarea correctamente
        onMarkdownChange({ target: { value: "" } });

        // También puedes resetear la altura si quieres
        const textarea = textareaRef.current;
        textarea.style.height = "auto";
    }
    

    return (
        <div className="markdown-create">
            <textarea
                ref={textareaRef}
                value={value}
                onChange={handleChange}
                placeholder="Escribe algo..."
                style={{
                    width: "100%",
                    minHeight: "50vh",
                    overflow: "hidden",
                    resize: "none",
                    borderRadius: ".4rem",
                    padding: "1rem",
                    border: "1px solid #ccc",
                    fontSize: "1rem",
                    lineHeight: "1.5",
                    }}            
            />
            <button className="button btn-work" onClick={clear}>
                Limpiar
            </button>
        </div>
    );
};

export default MarkdownCreate;