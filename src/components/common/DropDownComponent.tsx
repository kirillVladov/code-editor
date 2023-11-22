import {useState} from "react";
import {IDropDownModel} from "../../../types/common/DropDown.ts";

interface DropDownProps {
    list: IDropDownModel[],
    currentValueProps: IDropDownModel | null;
}

export const DropDownComponent = ({list, currentValueProps}: DropDownProps) => {
    const [currentValue, setCurrentValue] = useState(currentValueProps || list[0]);
    const [isOpen, setIsOpen] = useState(false);

    const DropdownList = () => (
        list.map((item: IDropDownModel, index: number) => (
            <div onClick={() => onSelect(item)} key={`${item.value}-${index}`}>{item?.name}</div>
        ))
    )
    const onOpen = () => setIsOpen(!isOpen);

    const onSelect = (value: IDropDownModel) => {
        onOpen();
        setCurrentValue(value);
    }

    return(
        <div className="drop-down">
            <div className="drop-down__selected" onClick={onOpen}>
                {currentValue?.name}
            </div>
            {isOpen ? DropdownList() : <></>}
        </div>
    )
}