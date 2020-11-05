import axios from "axios";
export const sendemail = async (obj) => {
    return await axios.post("http://localhost:4200/email-sender/sendemail", obj)
};