import {DropDownComponent} from "../common/DropDownComponent.tsx";
import LanguageOptions from "../../mocks/LanguageOptions.ts";

export const CodeEditorSettings = () => {
    return(
        <div className="">
            <div className="">
                <DropDownComponent list={LanguageOptions} currentValueProps={LanguageOptions[0]} />
            </div>
        </div>
    )
}