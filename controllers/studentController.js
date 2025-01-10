const Student = require('../models/Student')
exports.addStudent=async(req,res)=>{
    try {
        const newStudent= new Student(req.body)
        const savedStudent=await newStudent.save()
        res.status(200).json({"user":savedStudent})
    } catch (error) {
        res.status(400).json({"erreur: ":error.message})
    }
}
// getAllstudents
exports.getAllStudents= async(req,res)=>{
    try {
        const students=await Student.find()
        res.status(200).json({"students:":students})
    } catch (error) {
        res.status(500).json({"erreur: ":error.message})
    }
}
