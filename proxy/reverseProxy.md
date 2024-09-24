## Reverse proxy :

# A reverse proxy handles traffic on behalf of the server and is used to route client requests to internal servers.

- It acts as an intermediary between clients and servers, and it abstracts the clients from directly interacting with the backend servers.

<br>

# Reverse Proxy Workflow:

1. Client Request to Reverse Proxy:
   Clients send requests to the reverse proxy instead of directly to the backend servers. The client does not know about the existence or location of the backend servers.

2. Reverse Proxy Forwards Request to Backend Server:
   The reverse proxy analyzes the request and forwards it to the appropriate backend server, typically based on load-balancing or routing rules.

3. Backend Server Processes the Request:
   The backend server receives the forwarded request, processes it (e.g., fetching data, generating content), and prepares a response.

4. Backend Server Sends Response to Reverse Proxy:
   The backend server sends the response back to the reverse proxy, which may further modify or optimize the response.

5. Reverse Proxy Forwards Response to Client:
   The reverse proxy forwards the final response to the client, appearing as though it is the source of the response, hiding the backend servers.

<br>

# Why we need reverse proxy?

1. Load Balancing:
   Distributes client requests across multiple backend servers, ensuring no single server is overwhelmed.
2. Security:
   Protects backend servers by hiding their identities and adding layers of protection such as SSL terminationrequest filtering, and DoS protection.
3. Request routing:
   Reverse proxy can route the requests to different servers based on the request URL.
4. Caching:
   Stores frequently accessed resources at the proxy level to improve response time for future requests and reduce the load on backend servers.
5. SSL Termination:
   Handles SSL encryption and decryption, offloading the burden from backend servers.
6. Abstractation of Infra elasticity(auto scaling) and failover:
   Reverse proxy can abstract the underlying infrastructure from the clients.
7. Traffic Monitoring:
   Provides an entry point for logging and monitoring traffic to analyze user behavior, performance, or security metrics.

<br>

# Ex: DB Proxy:

DB Proxy is a reverse proxy that sits between the clients and the database servers.
It can

1. Cache the query results to reduce the load on the database servers.
2. Pool the database connections to reduce the connection overhead.
