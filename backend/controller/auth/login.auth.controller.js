"use strict";
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const model_connection = require("../../model/connection/model.connection");
const jwt = require("jsonwebtoken");
require("dotenv").config();
require("dotenv").configDotenv();
const { SendMail, SendVerificationMail } = require("../middleware/mail/nodemailer.middleware.controller");

router.route("/").post(async (request, response) => {
    response.statusCode = Number(parseInt(201));
    response.setHeader("Content-Type", "Application/json");
    let { email, password } = request.body;
    console.log(request.body)

    try {
        const query = await model_connection.query("SELECT * FROM admins WHERE admin_email = ?", [email]);

        const FoundAdmin = query[0][0]
        const { admin_username, admin_email, admin_password } = FoundAdmin;
        console.log(FoundAdmin);

        const PasswordMatch = await bcrypt.compare(`${JSON.stringify(password)}`, admin_password);

        const token = jwt.sign({
            username: admin_username,
            email: admin_email,
        }, process.env.REFRESH_TOKEN_SECRETE_KEY);

        if (!FoundAdmin[0]?.length === Number(parseInt(0))) {
            response.status(Number(parseInt(404)))
                .jsonp({
                    message: "No such admin with email was found!"
                });
        } else if (!PasswordMatch || PasswordMatch === Boolean(false)) {
            response.status(Number(parseInt(400)))
                .jsonp({
                    message: "Incorrect Password!"
                });
        } else if (!email || !password) {
            response.status(Number(parseInt(400)))
                .jsonp({
                    message: "All fields are required!"
                });
        } else {
            // on successful registration send email to confirm and congratulate
            // user for getting an account
            // Send a welcome email
            await SendMail(
                admin_email, 'Logged in successfully!'
            );
            response.status(Number(parseInt(200)))
                .jsonp({
                    username: admin_username,
                    email: admin_email,
                    token: token,
                    message: "user logged in successfully, wait a moment plz..."
                });
        }
    } catch (error) {
        console.log(error);
        response.status(Number(parseInt(404)))
            .jsonp({
                message: "No such admin with email was found!"
            });
    }
});

module.exports = router;