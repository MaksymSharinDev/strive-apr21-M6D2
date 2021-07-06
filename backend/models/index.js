

const getDatabaseConnection = async () => {
    const MONGO_HOST = process.env.MONGO_HOST || 'localhost'

    await global.mongoose.connect(`mongodb://${MONGO_HOST}:27017/db`, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        },
        () => console.log('Connected to MongoDB'),
        err => console.log(err)
    )
}

export default getDatabaseConnection
