import { Client, Account, Databases, Storage, Avatars} from 'appwrite';


export const appwriteConfigObj = {
  projectID: '66b8499e0028cbecb3a3',
  url: 'https://cloud.appwrite.io/v1',
}

export const client = new Client();

client
  .setProject(appwriteConfigObj.projectID)
  .setEndpoint(appwriteConfigObj.url);

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);