import { serve } from './dependencies.ts';

const HOST_NAME = '0.0.0.0'
const PORT = 8080;

const server = serve({ hostname: HOST_NAME, port: PORT });

console.log(`HTTP webserver running.  Access it at:  http://localhost:${PORT}/`);

for await (const request of server) {
  let bodyContent = 'Your user-agent is:\n\n';

  bodyContent += request.headers.get('user-agent') || 'Unknown';

  request.respond({ status: 200, body: bodyContent });
}
