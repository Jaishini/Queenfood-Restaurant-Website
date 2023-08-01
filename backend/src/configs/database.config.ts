import mongoose, {connect, ConnectOptions, set} from 'mongoose';

export const dbConnect = () => {
    set('strictQuery', false);
    connect(process.env.MONGO_URI!, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions).then(
        () => console.log("connect successfully"),
        (error) => console.log(error)
    )
}