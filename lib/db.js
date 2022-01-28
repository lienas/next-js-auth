import {MongoClient} from 'mongodb'

export const connectToDatabase = async () => {
    //mongodb+srv://<username>:<password>@cluster0.tsrek.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    //user: udemy
    //pw: YjwCqC7gDQfZkhop
    const connectionString = 'mongodb+srv://udemy:YjwCqC7gDQfZkhop@cluster0.tsrek.mongodb.net/AuthDemo?retryWrites=true&w=majority'
    const client = await MongoClient.connect(connectionString);

    return client;
}
