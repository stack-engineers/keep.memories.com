"use strict";
const model_connection = require("../../../model/connection/model.connection");
const json = require("../../../model/json/api.resources.json");

module.exports = async function (request, response) {
    response.contentType = "Application/json";
    response.statusCode = Number(parseInt(200));

    try {
        const query = await model_connection.query("SELECT * FROM admin_resources;");
        const resources = query[0];

        const FoundResource = resources.find((index) => {
            return index.resource_id === request.params.id;
        });

        if (!FoundResource) {
            return response.status(Number(parseInt(404)))
                .jsonp({
                    message: "No resource found!"
                });
        } else return response.status(Number(parseInt(200)))
            .jsonp(FoundResource);
    } catch (error) {
        response.status(Number(parseInt(500)))
            .jsonp({
                message: error.message
            });
    }
}