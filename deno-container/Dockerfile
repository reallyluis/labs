FROM hayd/alpine-deno:1.6.2

EXPOSE 8080

WORKDIR /app

USER deno

COPY dependencies.ts .
RUN deno cache dependencies.ts

ADD . .
RUN deno cache webserver.ts

CMD ["run", "--allow-net", "webserver.ts"]
