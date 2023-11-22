import {CodeEditorWindow} from "../components/code-editor/CodeEditorWindow.tsx";
import {CodeEditorSettings} from "../components/code-editor/CodeEditorSettings.tsx";

export const CodeEditorView = () => {
    const onChangeValue = (value: string) => {
        console.log(value)
    }

    return(
        <div>
            <CodeEditorSettings />
            <CodeEditorWindow code={""} theme={"vs-dark"} language={"javascript"} onChange={onChangeValue} />
        </div>
    )
}