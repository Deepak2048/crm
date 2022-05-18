const bcrypt = require('bcrypt');

const db = require('../../database/database');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const register = (req, res) =>{
    const inputemail = {email: req.body.email};

    const userEmail = "select * from auth where email = ?";

    db.query(userEmail, [inputemail.email], (error, dbResponse) =>{
        if(dbResponse.length>0){
            res.send({
                status: false,
                statusCode: 401,
                message: "This Email is already exits"
            });

        }else{
                const userInput = {
                    name : req.body.name,
                    gender: req.body.gender,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 12)
                }


                const insertQuery = "insert into auth set ?";

                db.query(insertQuery, userInput, (error, registerDbResponse) =>{
                    if(error) throw error;

                    res.send({
                        sucess: true,
                        statusCode: 201,
                        message: "user has been register successfully",
                        payload: registerDbResponse,
                    });
                   
                    
                }); 

            }

        }
    )


    
}

const login = (req, res) =>{
    const email = req.body.email;
    const password = req.body.password;
    const selectQuery = "select * from auth where email =?";
    db.query(selectQuery, email, (error, userDbResponse) =>{
        if(error) throw error;
        if (userDbResponse.length > 0) {
            const validPassword = bcrypt.compareSync(password, userDbResponse[0].password);
            if(userDbResponse[0].email == email && validPassword)
            {
                if(email && password){
                    const token = jwt.sign({id: userDbResponse[0].id}, process.env.JWT_SECRET_KEY, {expiresIn: "1H"});
                res.send({
                    sucess: true,
                    statusCode: 201,
                    message: "user has been loged in successfully",
                    payload: userDbResponse[0],
                    tokenId: token
                })
                }
                
            }
            else{
                res.send({
                    status: false,
                    statusCode: 400,
                    message: "Incorrect password"
                })
            }
            
        } else {
            res.send({
                status: false,
                statusCode: 400,
                message: "Invalid Email"
            })
        }
    })
}

module.exports = {register, login};