import React from "react";
import s from './SignIn.module.css'
import {Button} from "semantic-ui-react";
import {Form} from "formik";

export default function () {
return <div className={s.right_wrapper}>
    <div className={s.right_form_wrapper}>
    <p className={s.firsth}>Нет аккаунта? <br/>Присоединяйся к нам!</p>
    <p className={s.secondh}>После регистрации у вас будет возможность найти интересующего вас специалиста.</p>
        <Button type="submit"  color='teal' className={s.btn_right}>
           Зарегистрироваться
        </Button>
    </div>
</div>

}