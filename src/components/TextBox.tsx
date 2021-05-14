import * as React from 'react';
import {Container, TextField} from "@material-ui/core";
import {useState} from "react";
import '../styles/App.css';
import {hiraganaMappings} from "../mappings/Hiragana";
import {katakanaMappings} from "../mappings/Katakana";

type Props = {
    hiragana: boolean,
};

export const TextBox = (props: Props) => {
    const [value, setValue] = useState("");

    function onChange(text: string) {
        /* handle if they hit backspace or deleted a large chunk*/
        setValue(text);
        if (text.length < value.length)
            return;

        const mapping = props.hiragana ? hiraganaMappings : katakanaMappings;
        let current: string | undefined;

        for (let i = 3; i >= 1; i--) {
            current = mapping.get(text.toLowerCase().slice(-i - 1, -1));
            if (current !== undefined) {
                setValue(text.slice(0, -i - 1) + current + text.slice(-1));
                return;
            }
        }
    }

    return (
        <div style={{marginTop: "50px"}}>
            <Container maxWidth={"md"}>
                <TextField
                    id="main-text-box"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    multiline
                    rows={8}
                    placeholder={"こんにちわ"}
                    fullWidth={true}
                    variant="outlined"
                />
            </Container>
        </div>
    );
};

export default TextBox;
