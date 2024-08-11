import { Client, Account, Databases, Storage, Avatars} from 'appwrite';

export const appwriteConfigObj = {
  projectID: import.meta.env.LAMBDA_APPWRITE_PROJECT_ID,
  url: import.meta.env.APPWRITE_URL,
}

export const client = new Client();

client
  .setProject(appwriteConfigObj.projectID)
  .setEndpoint(appwriteConfigObj.url);

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);