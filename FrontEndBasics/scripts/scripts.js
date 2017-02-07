var requests = (function () {

    var getResponse = function (cntrl) {
        var myHeaders = new Headers();

        myHeaders.append("Content-Type", "application/json");

        var myInit = {
            method: 'GET',
            headers: myHeaders,
            cache: 'default'
        };

        var myRequest = new Request('http://ipinfo.io/json', myInit);
        fetch(myRequest)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            $('#' + cntrl).text(JSON.stringify(data));
        });
    }
    return {
        getResponse: getResponse
    };
})();