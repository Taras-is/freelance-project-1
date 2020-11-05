import React from "react";
import s from '../SighnUp/SignUp.module.css'
import SignUpLeft from "./SignUpLeft";
import SignUpRight from "./SignUpRight";

export default function () {
    return (
        <main className={s.sign_up_wrapper}>
            <SignUpLeft/>
            <SignUpRight/>
        </main>
    )

}