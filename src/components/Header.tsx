// @flow
import * as React from 'react';
import {Typography} from "@material-ui/core";

type Props = {};
export const Header = (props: Props) => {
    return (
        <div style={{marginTop: "40px"}}>
            <Typography color={"primary"} variant={"h1"} component={"h1"}>
                Japanese Keyboard
            </Typography>
            <Typography color={"secondary"} variant={"h2"} component={"h2"}>
                by leoata
            </Typography>
        </div>
    );
};
