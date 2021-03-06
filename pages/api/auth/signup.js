import {connectToDatabase} from "../../../lib/db";
import {hashPassword} from "../../../lib/auth";

const handler = async (req, res) => {

    if (req.method === 'POST') {
        const data = req.body;
        const {email, password} = data;

        if (!email ||
            !email.includes('@') ||
            !password ||
            password.trim().length < 7) {

            res.status(422).json({message: 'Invalid data!!'});
            return;

        }

        const client = await connectToDatabase()
        const db = client.db();

        const hashedPassword = await hashPassword(password);

        const result = await db.collection('users').insertOne({
            email: email,
            password: hashedPassword
        })

        res.status(201).json({message: 'Created User'});
    }

};

export default handler;
