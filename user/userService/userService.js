const db = require('../../database/database');

const createUSer = (req, res) =>{
    
    const userInput = {
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email,
        createdOn : new Date(),
        createdBy : req.body.createdBy,
        updatedBy : req.body.updatedBy,
        status : req.body.status,
        accountId : req.body.accountId
    };
    
console.log(userInput);
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

const commanDetails = (req, res) =>{
    const innerQuery = "select * from test inner join user ON test.accountId = user.accountId";
    db.query(innerQuery, (error, commanDbResponse) =>{

        if (error) throw error;
        res.send({
            message: "Comman datas  are listed successfully ",
            ststusCode:200,
            success: true,
            payload:commanDbResponse
        })
    })  
}

const updateUser = (req, res)=>{
    const set = req.body;
    const date = new Date();
    const updateQuery = "update user set userName =? ,email =?, password =?, createdBy =?,updatedOn = ?,updatedBy =?, accountId =? where id = ?";
    db.query(updateQuery,[set.userName, set.email,set.password,set.createdBy,set.updatedOn, set.updatedBy,set.accountId, req.params.id], (error, userDeleteDbResponse) =>{
        if (error)throw error;
        res.send({
            message: "User  are updated successfully ",
            ststusCode:200,
            success: true,
            payload:userDeleteDbResponse[0]
        })
    })

};

const deleteUserById = (req, res)=>{
    const deleteUserQuery = "delete from user where id = ?";
    console.log(parseInt(req.params.id));
    db.query(deleteUserQuery,[parseInt(req.params.id)], (error, deleteUserDBResponse) =>{
        if (error)throw error;
        res.send({
            message: "User data are deleted successfully by Id",
            ststusCode:200,
            success: true,
            payload:deleteUserDBResponse[0]
        })
    })
};

module.exports = {createUSer, getAllUser, getUserById, getUserByEmail, commanDetails, updateUser,deleteUserById };