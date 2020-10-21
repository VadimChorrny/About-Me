import React from "react";
import Header from "./Header"

export default {
    title: "ui/header",
    component: Header
}

const Template = (args) => <Header {...args} ></Header>

export const main = Template.bind({})

main.args = {

}