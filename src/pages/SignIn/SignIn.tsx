import React from "react"
import s from "./SignIn.module.css";
import SignInLeft from "./SignInLeft";
import SignInRight from "./SignInRight";


export default function () {

    return (
        <main className={s.form_wrapper}>
            <SignInLeft/>
        <SignInRight/>
        </main>
    )

}