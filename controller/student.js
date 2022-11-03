// var fs = require('fs');

// var students = fs.readFileSync('./data/students.json','utf-8'); 

const student = require('../models/student');

// students = JSON.parse(students);

const getStudents = async (req, res)=>{

    
    var data =  await student.find(req.query)
    .select("_id, name")
    .sort("-name")
    .skip(9)
    .limit(3)


    res 
    .status(200)
    .send(data);
}

const getStudent = async(req, res)=>{

    try {
            var data = await student.findById({
                "_id":req.params.id
            })
            .select("-__v");;
        
            res 
            .status(200)
            .send(data);
    } catch (error) {
        res
        .status(400)
        .send(error);   
    }
}

const  addStudent =  async(req, res)=>{

    try {
        var data =  await student.create(req.body);
    
        res
        .status(200)
        .send(data);

    } catch (error) {
        res
        .status(400)
        .send(error);       
    }
}

const updateStudent = async(req, res)=>{

    try {
        var data = await student.findOneAndUpdate({
            "_id": req.params.id
            },
            req.body,
            {new: true}
        );
    
        res
        .status(200)
        .send(data);
    } catch (error) {
        res
        .status(400)
        .send(error); 
    }
}

const deleteStudent = async (req, res)=>{

    try {
        var data = await student.findByIdAndRemove({
            "_id":req.params.id
        });
    
        res
        .status(200)
        .send(data);
    } catch (error) {
        res
        .status(400)
        .send(error); 
    }
}

module.exports = {
    getStudents,
    getStudent,
    addStudent,
    updateStudent,
    deleteStudent
}
