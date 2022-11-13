const pool=require("../db")
const {getStd,getStdById,deleStdByID,checkEmail,addStd,updateStd1}= require("../queries/queries")
const getAllStudent=(req,res)=>{
    pool.query(getStd,(err,restult)=>{
        if(err) throw err
        res.status(200).json({data:restult.rows})
    })
};
// get Student By ID when you need To send Variable U should use [] 
const getStudentById=(req,res)=>{
    const id=parseInt(req.params.id)
    pool.query(getStdById,[id],(err,restult)=>{
        if(err) throw err;
        res.status(200).json({data:restult.rows})
    })
};

// delete Student By ID when you need To send Variable U should use [] 
const deletStudentById=(req,res)=>{
    const id=parseInt(req.params.id)
    pool.query(deleStdByID,[id],(err,restult)=>{
        if(err) throw err;
        res.status(200).json({data:"deleted"})
    })
};

const addStudent=(req,res)=>{
    const {name,email,age,dob}=req.body;
    pool.query(checkEmail,[email],(err,restult)=>{
        if(restult.rows.length){
            res.status(400).json({data:"Email Already Exist"})   
            return;
        }
        //add data TO store In DB
        pool.query(addStd,[name,email,age,dob],(err,restult)=>{
            if(err) throw err;
            res.status(200).json({data:"added New Row In DB"})
        })
   
    })
};
const updateStd=(req,res)=>{
    const id=parseInt(req.params.id)
    const {name,email}=req.body;
    console.log(id,email,name)
    pool.query(checkEmail,[email],(err,restult)=>{
        if(restult.rows.length){
            res.status(400).json({data:"Email Already Exist"})   
            return;
        }
        //add data TO store In DB
        pool.query(updateStd1,[id,name,email],(err,restult)=>{
            if(err) throw err;
            res.status(200).json({data:"updated row in BD"})
        })
    })
}
module.exports={getAllStudent,getStudentById,addStudent,deletStudentById,updateStd}