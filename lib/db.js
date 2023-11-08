import { MongoClient } from "mongodb";

export async function connectToDatabase() {
    const client = await MongoClient.connect(
      "mongodb+srv://nemezg:HgFZaRqVAjDh9PI1@cluster0.kwoywqt.mongodb.net/auth-demo?retryWrites=true&w=majority" , {
			}
    );

  return client;
}
