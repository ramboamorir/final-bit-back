import mongoose from 'mongoose';

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.DB_HOST);
        console.log('Conexión existosa a la Base de Datos');
    } catch (error) {
        console.error('Error, se ha presentado un error en la conexión a la Base de Datos. ', error);
    }
};

export default connectDB;