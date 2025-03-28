Fastify Omno API Integration


Project Setup

*Node.js (>=16.x)
*npm
*Docker(optional)


Installation:

-git clone https://github.com/your-repo.git
-npm install

create .env and add following variables

SERVER_URL=localhost
PORT=3000

AUTH_FULL_URL=https://sso.omno.com/realms/omno/protocol/openid-connect/token

OMNO_CLIENT_ID=
OMNO_CLIENT_SECRET=

OMNO_BASE_URL=https://api.omno.com
TRANS_CREATE_URL=/transaction/h2h/create

run in development env.
-npm run dev

run in development env.
-npm run build
-npm start

If using Docker, build and run the container:
-docker-compose up --build

Swagger:
/api-docs

ROUTES:

POST /create-transaction - Initiates a new transaction.

POST /webhook - Handles incoming webhooks from Omno.
POST /callback - Handles incoming webhooks success callback.
POST /callback-fail - Handles incoming webhooks failed callback.
