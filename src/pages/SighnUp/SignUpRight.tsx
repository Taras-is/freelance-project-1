import React from "react";
import s from '../SighnUp/SignUp.module.css'
import SignUpLeft from "./SignUpLeft";
import FacebookImg from '../../assets/icons/Facebook.png'
import VkImg from '../../assets/icons/Vk.png'
import OdnoklasnikImg from '../../assets/icons/Odnoklasnik.png'
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button, Checkbox} from "semantic-ui-react";
import {CustomInput} from "../SignIn/SignInLeft";
import {sendemail} from "../../api/sendemail";
import {number} from "yup";


const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required("Ім'я обов'язкове!")
        .min(3,"Довжина ім'я не повинна бути коротша 3 символів!"),
   surname: Yup.string()
        .required("Прізвище обов'язкове!")
        .min(3, "Довжина прізвища не повинна бути коротша 3 символів!"),
   email: Yup.string()
        .required("Email обов'зковий!")
        .email("Email не відповідає формі!"),
    phone: Yup.string()
        .required("Телефон обов'язковий!")
        .min(5,"Неправильно вказаний номер!"),
});

const initialValues = {
    name:"",
    surname:"",
    email:"",
    phone:"",

};

const submit1 = async (values:any) => {
alert("Ви успішно відправили заявку на контакт з менеджером True Service.");
window.location.reload();
    const response = await sendemail({to: values.email, html: "<p class='sendEmail'>Доброго дня, ми отримали Ваше повідомлення. Ми можемо подзвонити до Вас, або в іншому випадку спілкуватися в електронному форматі.</p>", subject: "Відповідь від True service"});
console.log(response);
};

export default function () {
    return <div className={s.right_wrapper}>

        <div className={s.icons_wrapper}>
            <div className={s.vectors}>
                <a href='#'><img alt='icon' src={VkImg} /></a>
                <a href='#'><img alt='icon' src={FacebookImg} /></a>
                <a href='#'><img alt='icon'  src={OdnoklasnikImg} /></a>
            </div>
        </div>
            <div className={s.root}>


            </div>
<div className={s.right_form_wrapper}>
    <p className={s.manager}> Відправте заявку на запис авто, наш менеджер зв'яжеться з Вами протягом 1 години!</p>
    <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={submit1}


    >
        {({
              values,
              handleSubmit,
              handleChange,
              isSubmitting,
              isValid,
              errors,
              touched,
          }) => (
            <Form className={s.formContainer}>
                <div className={s.field_wrapper}>
                    <label htmlFor='name'>Ім'я</label>
                    <Field
                        name="name"
                        component={CustomInput}
                        value={values.name}
                        onChange={handleChange}
                        className={s.input}
                    />

                    <ErrorMessage
                        component="div"
                        name="name"
                        className={s.errorMessage}
                    />

                </div>
                <div className={s.field_wrapper}>
                    <label htmlFor='surname'>Прізвище</label>
                    <Field
                        name="surname"
                        component={CustomInput}
                        value={values.surname}
                        onChange={handleChange}
                        className={s.input}
                    />

                    <ErrorMessage
                        component="div"
                        name="surname"
                        className={s.errorMessage}
                    />
                </div>
                <div className={s.field_wrapper}>
                    <label htmlFor='email'>Email</label>
                <Field
                    name="email"

                    component={CustomInput}
                    value={values.email}
                    onChange={handleChange}
                    className={s.input}
                />

                <ErrorMessage
                    component="div"
                    name="email"
                    className={s.errorMessage}
                />
            </div>

                <div className={s.field_wrapper}>
                    <label htmlFor='phone'>Телефон</label>
                    <Field
                        name="phone"
                        component={CustomInput}
                        value={values.phone}
                        onChange={handleChange}
                        className={s.input}
                    />

                    <ErrorMessage
                        component="div"
                        name="phone"
                        className={s.errorMessage}
                    />
                </div>

                <Button type="submit" onClick={() => handleSubmit} basic color='black' className={s.btn}>
                  Відправити заявку менеджеру
                </Button>

                <div className={s.registercheck}>
                    <Checkbox label={<label>Я даю дозвіл на обробку своїх даних компанією TRUE SERVICE</label>} />
                </div>
            </Form>
        )}</Formik>
</div>

</div>



}
