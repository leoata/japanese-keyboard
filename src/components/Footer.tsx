// @flow
import * as React from 'react';
import {Typography} from "@material-ui/core";

type Props = {};
export const Footer = (props: Props) => {
    return (
        <div style={{marginTop: "130px"}}>
            <Typography className="center" color={"primary"} variant={"h4"} component={"h4"}>
                2022年のレオナルドあたらクラスによって作ら
            </Typography>
            <Typography className="center" color={"primary"} variant={"h5"} component={"h5"}>
                made by leonardo atalla '22
            </Typography>
        </div>
    );
};
