NGINX is a powerful, open-source web server and reverse proxy server often used for load balancing, caching, and handling high-traffic websites. It’s known for its high performance, stability, and low resource consumption. Here’s an overview of NGINX and a quick guide to getting started with common configurations:

## Key NGINX Features:

Web Server: Serve static content efficiently with low memory usage.
Reverse Proxy: Distribute incoming requests to different backend servers.
Load Balancing: Distribute traffic across multiple servers to balance the load.
Caching: Cache responses to reduce server load and improve performance.
Security: Set up SSL/TLS, control access, and apply security headers.


## NGINX as reverse proxy 

Let's create a general example of an Nginx server configuration that includes a health check endpoint and a reverse proxy setup. 
This example will use placeholders that can be replaced with actual values as needed.

1. Create a file named express-demo.conf in the sites-available directory.
```
sudo nano /etc/nginx/sites-available/example-demo.conf
```

2. Paste the following content into the example-demo.conf file.

```
server {

     listen       80;
     listen       [::]:80;
     server_name  example.com;
     
     location = /health {
        add_header 'Content-Type' 'application/json';
        return 200 '{"status":"UP"}';
    }

    location / {
        proxy_pass http://backend_server_address;
    }
}
```

Explanation - 
a. Server Block:
listen 80;: Listens for incoming connections on port 80 (HTTP) for IPv4.
listen [::]:80;: Listens for incoming connections on port 80 (HTTP) for IPv6.
server_name example.com;: Specifies the server name. Replace example.com with your actual domain name.

b. Health Check Location:
location = /health: Matches requests to the /health endpoint exactly.
add_header 'Content-Type' 'application/json';: Adds a Content-Type header with the value application/json.
return 200 '{"status":"UP"}';: Returns a JSON response with a status of "UP" and an HTTP status code of 200. This is typically used for health checks.

c. Proxy Pass Location:
location /: Matches all other requests.
proxy_pass http://backend_server_address;: Forwards the requests to the backend server at the specified address. Replace backend_server_address with the actual address of your backend server.

3. To activate the virtual host configuration, create a soft link in the sites-enabled directory.
sudo ln -s /etc/nginx/sites-available/example-demo.conf /etc/nginx/sites-enabled/

4. Test the configuration to identify the errors.
```
sudo nginx -t
```

If the configuration has no errors, your output should look like:
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful

5. Restart the Nginx server.
```
sudo systemctl reload nginx
```

6. Allow incoming connections on port 80.
```
sudo ufw allow 80/tcp
```

7. In a web browser, navigate to the URL as shown below.
```
http://example.com
```

