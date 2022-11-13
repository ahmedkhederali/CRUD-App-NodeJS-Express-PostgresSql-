const getStd="select * from students";
const getStdById="select * from students where id=$1";
const checkEmail="select * from students where email=$1";
const deleStdByID="DELETE FROM students WHERE id=$1;"
const addStd="insert into students (name,email,age,dob) values ($1,$2,$3,$4);"
const updateStd1="UPDATE students SET name = $2, email= $3 WHERE id = $1;"
module.exports={getStd,getStdById,deleStdByID,checkEmail,addStd,updateStd1}