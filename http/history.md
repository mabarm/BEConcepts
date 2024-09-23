HTTP History

# 1. HTTP 1.0 - 1996

- **a. Slow** -
  For each request ( takes some memory) , open a connection, send the request, get the response and close the connection. This was very slow.
  TCP is very slow. So, it was not efficient to open and close the connection for each request.
- **b. Buffering Issues**:
  If the response was large, buffering the entire response before sending it to the client would increase wait times, making it slow for large files.

# 2. HTTP/1.1 - 1997 (Survived 20 years)

- **a. Persistent TCP Connection**:
  HTTP/1.1 introduced the concept of persistent connections through the Keep-Alive header, which allows the connection to stay open between multiple requests and responses, rather than closing after each request. This reduces the overhead and latency caused by constantly opening and closing TCP connections.
- **b. Lower Latency (compared to HTTP/1.0)**:
  HTTP/1.1 improved performance and reduced latency compared to HTTP/1.0, largely d due to persistent connections, but it still has inherent limitations like head-of-line blocking in certain cases.
- **c. Streaming with Chunked Transfer Encoding**:
  HTTP/1.1 introduced chunked transfer encoding, which allows a server to start sending parts of the content (e.g., HTML page) to the client before the entire response is generated. This enables streaming where content is sent in parts (chunk 1, chunk 2, etc.) as it becomes available.
- **d.Pipelining (disabled by default)**:
  HTTP/1.1 supports HTTP pipelining, which allows multiple requests to be sent in rapid succession without waiting for each response. However, pipelining is often disabled by default because it can lead to head-of-line blocking. This occurs when a single slow or blocked request prevents subsequent responses from being processed efficiently, limiting performance.

# 3. HTTP/2 - 2015

- **a. Multiplexing**:
  HTTP/2 allows multiple requests and responses to be sent simultaneously over a single connection, preventing head-of-line blocking at the application layer. This is done by splitting data into smaller frames that are interleaved and sent concurrently.
- **b. Header Compression**:
  HTTP/2 compresses request and response headers, reducing overhead and improving performance. This is achieved using the HPACK algorithm, which encodes headers as a series of indexed and huffman-encoded values.
- **c. Server Push**:
  The server can push resources (like CSS, JavaScript, images) to the client proactively, before the client explicitly requests them, improving performance for subsequent requests.
- **d. Binary Protocol**:
  HTTP/2 uses a binary framing protocol instead of the text-based protocol used in HTTP/1.x, making it faster and easier to parse, while reducing ambiguities in communication.
- **e. Secure by Default**:
  HTTP/2 can be secure, but this statement needs clarification. While HTTP/2 can be used over an unencrypted connection (i.e., cleartext), most browsers and servers only support HTTP/2 over TLS (encrypted connections), effectively making it secure by default in most implementations.
- **f. Protocol Negotiation during TLS Handshake (NPN, ALPN)**:
  HTTP/2 uses ALPN (Application-Layer Protocol Negotiation) to negotiate the protocol version during the TLS handshake. NPN (Next Protocol Negotiation) was the earlier method used but is now deprecated in favor of ALPN.
- **g. Request Resource in Priority**:  
  HTTP/2 introduces the ability to prioritize resource requests, allowing clients to specify the order in which resources should be fetched. This enables critical resources (such as CSS and JavaScript) to be loaded first, improving performance and enhancing the user experience.

# 4. HTTP/3 - 2020

- **a. Replaced TCP with quic**( UPD with congestion control)
  UDP is lossy i.e. there is no guarantee that the packet will reach correctly. So, QUIC has its own error correction mechanism.
- **Has all HTTP/2 features.** ( See more)
- **Still experimental.**
