<h1>Fastify Omno API Integration</h1>


<h3>Project Setup</h3>

*Node.js (>=16.x)</br>
*npm</br>
*Docker(optional)</br>


<h3>Installation:</h3>

-git clone https://github.com/your-repo.git</br>
-npm install

create .env and add following variables

<pre>
SERVER_URL=localhost
PORT=3000

AUTH_FULL_URL=https://sso.omno.com/realms/omno/protocol/openid-connect/token

OMNO_CLIENT_ID=api-key
OMNO_CLIENT_SECRET=api-secret

OMNO_BASE_URL=https://api.omno.com
TRANS_CREATE_URL=/transaction/h2h/create
</pre>
run in development env.</br>
-npm run dev

run in development env.</br>
-npm run build</br>
-npm start

If using Docker, build and run the container:</br>
-docker-compose up --build

<h3>Swagger:</h3>
/api-docs

<h3>ROUTES:</h3>

POST /create-transaction - Initiates a new transaction.

POST /webhook - Handles incoming webhooks from Omno. </br>
POST /callback - Handles incoming webhooks success callback. </br>
POST /callback-fail - Handles incoming webhooks failed callback. </br>
