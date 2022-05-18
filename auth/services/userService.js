// const express = require('express');
// const db = require('../database');

// // const checkAuth = require('../middleware/checkAuth');
// const app = express();
// app.use(express.json())
//  const getAllUser = (req, res)=>{
//     //  console.log(req);
//     const listAllQuery = "select * from user";
//     db.query(listAllQuery, (error, userAllDBResponse) =>{
//         if (error)throw error;
//         res.send({
//             message: "All the user  are listed successfully",
//             ststusCode:200,
//             success: true,
//             payload:userAllDBResponse
//         })
//     })
// };

// const vtoken = (req, res)=>{
//     db.query(" ", chechAuth, (error, userAllDBResponse) =>{
//         if (error)throw error;
//         res.send({
//             message: "ssuccessfully",
//             ststusCode:200,
//             success: true,
//         })
//     })
// };

// module.exports = {getAllUser, vtoken};