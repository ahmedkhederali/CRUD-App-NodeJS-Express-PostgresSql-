const router=require('express').Router();
const {getAllStudent,getStudentById,deletStudentById,addStudent,updateStd} =require("../controller/studentCtrl")
router.get('/',getAllStudent)
router.post('/',addStudent)
router.get('/:id',getStudentById)
router.delete("/:id",deletStudentById)
router.patch("/:id",updateStd)
module.exports=router;