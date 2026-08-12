import express from 'express';
import empleadoCtrl from '../controller/empleado.controller.js';
import { Router } from "express";

const router = express.Router();


router.post("/create", empleadoCtrl.createEmpleado);
router.get("/list", empleadoCtrl.getEmpleados);
router.get("/list/:id", empleadoCtrl.getEmpleadoID);
router.put("/list/:id", empleadoCtrl.updateEmpleado);
router.delete("/list/:id", empleadoCtrl.deleteEmpleado);


export default router;