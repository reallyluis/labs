Dockerize and run basic web server.

```
docker build -t app . && docker run -it --name my_deno --init -p 8080:8080 app
```