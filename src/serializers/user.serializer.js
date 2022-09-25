import { hashSync } from "bcryptjs";
import { v4 } from "uuid";
import * as yup from 'yup';

const createUserSerializer = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    isAdm: yup.boolean().required(),
    password: yup
        .string()
        .transform((password) => hashSync(password, 10))
        .required(),
    uuid: yup
        .string()
        .transform(() => v4())
        .default(() => v4())
        .notRequired(),
});
export default createUserSerializer;