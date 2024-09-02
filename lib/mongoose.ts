import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (!process.env.MONGODB_URL) {
        return console.log('Missing MongoDB URL');   
    }
    if (isConnected) {
        return console.log('MONGODB is already connected');
    }

    try {
        mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'unifi'
        })

        isConnected = true
        console.log('MONGODB IS CONNECTED SUCCESSFULLY');
        
    } catch (error) {
        console.log(error);
        
    }
}