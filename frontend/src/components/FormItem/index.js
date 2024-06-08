import * as OolibComponents from "oolib";
import { useState } from "react";
import { multipleValueItems } from "./constants"

function FormItem({ item }) {
    const SelectedComponent = OolibComponents[item.comp];
    const [value, setValue] = useState(multipleValueItems.includes(item.comp) ? [] : "");

    if (SelectedComponent) {
        return <SelectedComponent
            isRequired={item.isRequired}
            {...item.props}
            onChange={(id, value) => {
                setValue(value);
            }}
            value={value} />;
    }
    return <></>;

}

export default FormItem;