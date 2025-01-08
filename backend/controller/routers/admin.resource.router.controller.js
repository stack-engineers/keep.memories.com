"use strict";
const express = require("express");
const router = express.Router();
const model_connection = require("../../model/connection/model.connection");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (request, file, cb) {
        cb(null, require("node:path").join(__dirname, "../../uploads"));
    },
    filename: function (request, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({
    storage: storage
});

router.route("/").get(async (request, response) => {
    response.contentType = "Application/json";
    response.statusCode = Number(parseInt(200));

    try {
        const query = await model_connection.query("SELECT * FROM admin_resources;");
        const resources = query[0];

        response.status(Number(parseInt(200)))
            .jsonp(resources);

    } catch (error) {
        response.status(Number(parseInt(200)))
            .jsonp({
                message: error.message
            });
    }
}).post(upload.single("file"), require("./modules/post.admin.resources.module.controller"));

// ***************** //
router.route("/:id")
    .get(require("./handler/resource.get.handler.controller"))
    .delete(require("./handler/resource.delete.handler.controller"));


router.use(require("../middleware/error/404.middleware.controller"));
module.exports = router;