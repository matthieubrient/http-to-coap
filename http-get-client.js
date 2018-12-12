// Include http ,fs and url module.
var http = require('http');

var requestOptions = {
    hostname:'localhost',
    port:'8888',
    method:'get',
    path:'/http_get_static_file_server.js'
};

// Create a http.ClientRequest object
var request = http.request(requestOptions, function (resp) {

    var returnData = '';

    // When server return any data.
    resp.on('data', function (data) {
        returnData += data;
    })

    // When server return data complete.
    resp.on('end', function () {
        console.log(returnData);
    })

});

// Finish sending the request. Then serve will process this request.
