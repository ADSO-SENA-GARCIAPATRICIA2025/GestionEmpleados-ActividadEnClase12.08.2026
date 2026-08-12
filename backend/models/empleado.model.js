import mongoose from "mongoose";

//nombre, apellido
const EmpleadoSchema = new mongoose.Schema({
  nombre: {
    type: String,   
    required: true,
  },
  cargo: {      
    type: String,
    required: true,
  },    
    sucursal: {  
    type: String,
    required: true,
  },
    salario: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Empleado", EmpleadoSchema);