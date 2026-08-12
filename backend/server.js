import express from 'express';
import empleadoRouter from './routes/empleado.route.js';
import './dbconnect.js';



//importamos express para crear el servidor
const app = express();
app.set('port', 3000);


// Middleware para recibir JSON
app.use(express.json());
// Rutas de empleados
app.use('/api/empleados', empleadoRouter);



//iniciar el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});

