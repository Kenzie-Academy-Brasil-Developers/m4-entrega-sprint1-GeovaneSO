import { hashSync } from "bcryptjs";
import { v4 } from "uuid";
import * as yup from 'yup';

const createSessionSerializer = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
});
export default createSessionSerializer;