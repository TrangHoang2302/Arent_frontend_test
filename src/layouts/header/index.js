/*************************
 * Copyright 2023
 * Author: TrangHoang
 * url: src/layout/header/index.js
 *************************/

import React from "react";
import { Grid, Button, Box, Popover } from "@mui/material";
import { browserHistory } from "react-router";
import Logo from "../../assets/image/logo.png";

const dataMenu = [
    {
        icon: require("../../assets/icon/icon-memo.png"),
        title: "自分の記録",
        link: "/my-record",
    },
    {
        icon: require("../../assets/icon/icon-challenge.png"),
        title: "自分の記録",
    },
    {
        icon: require("../../assets/icon/icon-info.png"),
        title: "自分の記録",
    },
];

const dataPopover = [
    { link: "/my-record", label: "自分の記録" },
    { link: "", label: "体重グラフ" },
    { link: "", label: "目標" },
    { link: "", label: "選択中のコース" },
    { link: "/column-page", label: "コラム一覧" },
    { link: "", label: "設定" },
];

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    /**
     * redirect to link
     * @param item
     */
    const onLink = item => {
        const { link } = item;
        if (link) browserHistory.push(link);
        handleClose();
    };

    /**
     * close Popover
     */
    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <Box
            sx={{
                backgroundColor: "#414141",
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
            }}
        >
            <Box
                sx={{ height: 64, maxWidth: 960, margin: "auto" }}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Grid container>
                    {/*Logo*/}
                    <Grid item xs={12} sm={4}>
                        <Button
                            startIcon={<Box component={"img"} src={Logo} sx={{ width: 114 }} />}
                            onClick={() => onLink({ link: "/" })}
                        />
                    </Grid>
                    {/*Menu*/}
                    {dataMenu.map((item, idx) => (
                        <Grid item xs={2} key={idx} display={"flex"} justifyContent={"flex-end"}>
                            <Button
                                variant={"text"}
                                sx={{ color: "white" }}
                                startIcon={<Box sx={{ width: 32 }} component={"img"} src={item.icon} />}
                                onClick={() => onLink(item)}
                            >
                                {item.title}
                            </Button>
                        </Grid>
                    ))}

                    {/*Button Popover Menu*/}
                    <Grid item xs={2} display={"flex"} justifyContent={"flex-end"}>
                        <Button
                            aria-describedby={id}
                            variant={"text"}
                            sx={{ color: "white" }}
                            startIcon={
                                <Box
                                    sx={{ width: 32 }}
                                    component={"img"}
                                    src={require("../../assets/icon/icon-menu.png")}
                                />
                            }
                            onClick={handleClick}
                        />
                    </Grid>

                    {/*Popover Menu*/}
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                    >
                        <Box display={"flex"} flexDirection={"column"} sx={{ backgroundColor: "#777777", width: 280 }}>
                            {/*list menu Popover*/}
                            {dataPopover.map((item, idx) => (
                                <Button sx={{ color: "white" }} size={"large"} key={idx} onClick={() => onLink(item)}>
                                    {item.label}
                                </Button>
                            ))}
                        </Box>
                    </Popover>
                </Grid>
            </Box>
        </Box>
    );
};

export default Header;
