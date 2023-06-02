pm.sendRequest({
  url: 'https://jsonplaceholder.typicode.com/posts',
  method: 'GET',
}, function (err, response) {
  // Check for any request errors
  if (err) {
    console.error(err);
    return;
  }

  // Check the response status code
  pm.test("Response should have status code 200", function () {
    pm.expect(response.code).to.equal(200);
  });

  // Check the response data types
  pm.test("Response should have correct data types", function () {
    var jsonData = response.json();

    // Check data type for each property in each post
    jsonData.forEach(function (post) {
      // Check userId
      pm.expect(typeof post.userId).to.eql("number");

      // Check id
      pm.expect(typeof post.id).to.eql("number");

      // Check title
      pm.expect(typeof post.title).to.eql("string");
    });
  });

  // Check the response body
  pm.test("Response should have valid JSON body", function () {
    pm.response.to.have.jsonBody();
  });

  // Check the response time
  pm.test("Response time should be less than 500ms", function () {
    pm.expect(response.responseTime).to.be.below(500);
  });

  // Log the response
  console.log(response.json());
});

