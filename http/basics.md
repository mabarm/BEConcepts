HTTP is a client server architecture. (Request Response model)

HTTP is a stateless protocol. (No memory of previous requests)

Client sends a request to the server and server sends a response back to the client.
Client can be a browser, mobile app, desktop app or any other device that can send a HTTP request.

Server can be a HTTP web server e.g. Apache Tomcat, Nginx, Node etc.

# HTTP Request:

1. URL - where the request is being sent.
2. Method type - (GET, POST, PUT, DELETE, PATCH) etc.
3. Headers - What kind of data is being sent.
4. Body - Data being sent to the server. Not all requests have a body.

# HTTP Response:

1. Status code - Whether succeed or not other status etc. (200, 404, 500 etc.)
2. Headers - This the content type, length etc.
3. Body - Actual content ata being sent back to the client.

# Basic web server

## Headers -

**a. General headers** - Applies to both request and response.
**b. Request headers** - Contains more information about the resource to be fetched.
**c. Response headers** - Contains more information about the response.

1. Etag - Whether the resource needs to be fetched again or not.
2. Content type - What kind of data is being sent. ex for image its image/jpeg.
