import React, {useState} from "react";

type foo = [ initialValue: Boolean, toogle: Function ]


export default function trueFalse(initialValue:boolean): foo {

    const [value, setValue] = useState(initialValue)

    function toogle() {
        setValue(!value)
    }

    return [value, toogle]
}

