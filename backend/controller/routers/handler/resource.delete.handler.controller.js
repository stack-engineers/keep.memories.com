"use strict";
const model_connection = require("../../../model/connection/model.connection");

module.exports = async function (request, response) {
    response.contentType = "Application/json";
    response.statusCode = Number(parseInt(201));
    const query = await model_connection.query("SELECT * FROM admin_resources;");
    const resources = query[0];

    try {
        const query = await model_connection.query("SELECT * FROM admin_resources;");
        const FoundResource = resources.find((index) => {
            return index.resource_id === request.params.id
        });

        if (!FoundResource) {
            return response.status(Number(parseInt(404)))
                .jsonp({
                    message: "No resource found!"
                });
        } else {
            model_connection.query(`
                    DELETE FROM admin_resources WHERE resource_id = ?
                `, [FoundResource.resource_id]);

            return response.status(Number(parseInt(200)))
                .jsonp("resource has been deleted!");
        }
    } catch (error) {
        response.status(Number(parseInt(500)))
            .jsonp({
                message: error.message
            });
    }
}