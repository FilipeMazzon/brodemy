const MongoClient = require('mongodb').MongoClient;
const {user, password, dbName} = require('./db.json');
const uri = `mongodb+srv://${user}:${password}@cluster0-6zlfo.mongodb.net/${dbName}?retryWrites=true`;
class Database {
    constructor() {
        this.db = null
    }

    get() {
        return new Promise(async (resolve, reject) => {
            try {
                if (this.db !== null) {
                    resolve(this.db);
                } else {
                    this.db = await this.connect();
                    resolve(this.db);
                }
            } catch (e) {
                reject(e);
            }
        });
    }

    async connect() {
        return new Promise(async (resolve, reject) => {
            try {
                let client = MongoClient(uri,{ "useNewUrlParser": true });
                let _db = await client.connect();
                _db = _db.db(dbName);
                console.log(`connected in dbname: ${dbName}`);
                resolve(_db);
            } catch (e) {
                reject(e);
            }
        });
    }

    disconnect() {
        if (this.db) {
            this.db.close();
        }
    }
}

module.exports = new Database;