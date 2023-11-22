import { useState } from "react";

import Editor, {Theme} from "@monaco-editor/react";
import {EditorLanguage} from "monaco-editor/esm/metadata";

interface EditorProps {
    onChange: Function,
    language: EditorLanguage,
    code: string,
    theme: Theme;
}

export const CodeEditorWindow = ({ onChange, language, code, theme }: EditorProps) => {
    const [value, setValue] = useState(code || "");

    const handleEditorChange = (value: string | undefined) => {
        setValue(value ?? "");
        onChange(value);
    };

    return (
        <div className="overlay rounded-md overflow-hidden w-full h-full shadow-4xl">
            <Editor
                height="85vh"
                width={`100%`}
                language={language || "javascript"}
                value={value}
                theme={theme}
                onChange={handleEditorChange}
            />
        </div>
    );
};