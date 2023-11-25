import {DropDownComponent} from "../common/DropDownComponent.tsx";
import LanguageOptions from "../../mocks/LanguageOptions.ts";
import ThemeOptions from "../../mocks/ThemeOptions.ts";

export const CodeEditorSettings = () => {
    return(
        <div className="code-editor-settings flex px-16 py-1">
            <div className="code-editor-settings__lang mr-10">
                <DropDownComponent list={LanguageOptions} currentValueProps={LanguageOptions[0]} />
            </div>
            <div className="code-editor-settings__theme">
                <DropDownComponent list={ThemeOptions} currentValueProps={ThemeOptions[0]} />
            </div>
        </div>
    )
}