import * as React from 'react';
import {Box, ButtonBase, Fade, Typography} from "@material-ui/core";
import {Dispatch, SetStateAction} from "react";

type MyButtonProps = {
    text: string,
    selected: boolean,
    setSelected: Dispatch<SetStateAction<boolean>>,
};
const MyButton = (props: MyButtonProps) => {
    const borderRadius = props.text === "Hiragana" ? "18px 10px 10px 18px" : "10px 18px 18px 10px";
    const backgroundColor = props.selected ? "#2292FF" : "#FFFFFF";
    return (
        <ButtonBase
            disableRipple
            onClick={() => {
                props.setSelected(props.text === "Hiragana");
            }}
            className={"blue-box"}
            style={{borderRadius, backgroundColor}}
        >
            <Typography variant={"h3"}>
                {props.text}
            </Typography>
        </ButtonBase>
    )
}

type Props = {
    hiragana: boolean,
    setHiragana: Dispatch<SetStateAction<boolean>>,
};
export const ToggleButton = (props: Props) => {
    return (
        <div style={{minWidth: "100%"}} className={"center"}>
            <Box width={"285px"} height="48px" border={2} borderRadius={"20px"} marginTop={"50px"}>
                <MyButton selected={props.hiragana} setSelected={props.setHiragana} text={"Hiragana"}/>
                <MyButton selected={!props.hiragana} setSelected={props.setHiragana} text={"Katakana"}/>
            </Box>
        </div>
    );
};
