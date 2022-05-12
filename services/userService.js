const db = require('../database/database');

const createUSer = (req, res) =>{
    
    const userInput = {
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email,
        createdOn : new Date(),
        createdBy : req.body.createdBy,
        updatedOn : new Date(),
        updatedBy : req.body.updatedBy,
        status : req.body.status,
        accountId : req.body.accountId
    };
    
console.log(userInput);
console.log(req.body);
    const userInsertQuery = " insert into user set ?";
    db.query(userInsertQuery, userInput, (error, userDbREsponse) =>{
        if(error) {
            res.send(error)
        };
        res.send("User data inserted successfully")
    })
};

const getAllUser = (req, res)=>{
    const listAllQuery = "select * from user";
    db.query(listAllQuery, (error, userAllDBResponse) =>{
        if (error)throw error;
        res.send({
            message: "All the user  are listed successfully",
            ststusCode:200,
            success: true,
            payload:userAllDBResponse
        })
    })
}

const getUserById = (req, res)=>{
    const listUserQuery = "select * from user where id = ?";
    console.log(parseInt(req.params.id));
    db.query(listUserQuery,[parseInt(req.params.id)], (error, userAllDBResponse) =>{
        if (error)throw error;
        res.send({
            message: "User  are listed successfully by Id",
            ststusCode:200,
            success: true,
            payload:userAllDBResponse[0]
        })
    })
};

const getUserByEmail = (req, res)=>{
    
    const listQuery = "select * from user where email = ?";
    console.log(parseInt(req.params.email));
    db.query(listQuery,emailInput, (error, userAllDBResponse) =>{
        if (error)throw error;
        res.send({
            message: "User  are listed successfully by email",
            ststusCode:200,
            success: true,
            payload:userAllDBResponse[0]
        })
    })
};

module.exports = {createUSer, getAllUser, getUserById, getUserByEmail };