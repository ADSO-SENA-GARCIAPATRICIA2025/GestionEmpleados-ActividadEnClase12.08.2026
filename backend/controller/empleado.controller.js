import Empleado from "../models/empleado.model.js";

//declarar una nueva constante para crear un objeto vacio

const empleadoCtrl = {};

//definir los metodos
//create
empleadoCtrl.createEmpleado = async (req, res) => {
    /*const { nombre, cargo, sucursal, salario } = req.body;
    const newEmpleado = new Empleado({ nombre, cargo, sucursal, salario });*/
    const newEmpleado = new Empleado(req.body);
    await newEmpleado.save();
    res.json(
        { message: `Empleado creado: ${newEmpleado.nombre}` }
    );
};

//read
empleadoCtrl.getEmpleados = async (req, res) => {
    const empleados = await Empleado.find();
    res.json(empleados);
};

//read one
empleadoCtrl.getEmpleadoID = async (req, res) => {
    const empleado = await Empleado.findById(req.params.id);
    res.json(empleado);
};

//update
empleadoCtrl.updateEmpleado = async (req, res) => {
    const { nombre, cargo, sucursal, salario } = req.body;
    await Empleado.findByIdAndUpdate(req.params.id, { nombre, cargo, sucursal, salario });
    res.json({ message: "Empleado actualizado" });
};

//delete
empleadoCtrl.deleteEmpleado = async (req, res) => {
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({ message: "Empleado eliminado" });
};

//exportar el objeto
export default empleadoCtrl;