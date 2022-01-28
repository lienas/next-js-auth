import {hash} from 'bcryptjs'

export const hashPassword = async (pwd) => {
    const hashedPassword = await hash(pwd, 12);
    return hashedPassword;
}
