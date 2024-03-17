import { Client, Account, ID, Databases, Query, Storage } from 'appwrite';

const client = new Client()
  .setEndpoint(String(process.env.PUB_APPWRITE_URL_ENDPOINT))
  .setProject(String(process.env.PUB_PROJECT_ID));

const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);

export { client, account, database, storage, Query, ID };
