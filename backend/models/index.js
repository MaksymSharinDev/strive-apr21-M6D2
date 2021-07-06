import mongoose from "mongoose";

const getDatabaseConnection = async () => {
    const MONGO_HOST = process.env.MONGO_HOST || 'localhost'

    await mongoose.connect(`mongodb://${MONGO_HOST}:27017/db`, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    const db = mongoose.connection

    db.once('open', () => {  // Check connection
        console.log('Connected to MongoDB')
    })

    db.on('error', (err) => {  // Check for DB errors
        console.log(err)
    })
}

export default getDatabaseConnection
