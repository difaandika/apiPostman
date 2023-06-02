// Memeriksa status kode
pm.test("Response status is 201", function () {
    pm.response.to.have.status(201);
});

// Memeriksa muatan respon
pm.test("Response body matches input payload", function () {
    var requestData = JSON.parse(pm.request.body.raw);
    var responseData = pm.response.json();

    pm.expect(responseData.title).to.eql(requestData.title);
    pm.expect(responseData.body).to.eql(requestData.body);
    pm.expect(responseData.userId).to.eql(requestData.userId);
});
