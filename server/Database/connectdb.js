import mongoose from 'mongoose'

const Connection = async (URL) => {
    try {
        await mongoose.connect(URL, {
            // useUnifiedTopology: true,
            // useNewUrlParser: true
        })
        console.log(`Connected Successfully...`)
    } catch (error) {
        console.log('Error while connecting Database...',error.message)
    }
}

export default Connection