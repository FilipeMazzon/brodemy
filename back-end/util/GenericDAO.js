const Db = require('../config/db');

class GenericDAO {
    constructor(col) {
        this.col = col;
    }

    async findAll(findConfig, sortConfig, limit) {
        return new Promise(async (resolve, reject) => {
            try {
                let result;
                let db = await Db.get();
                if (limit) {
                    result = await db.collection(this.col).find({}).project(findConfig).sort(sortConfig).limit(limit).toArray();
                } else {
                    result = await db.collection(this.col).find({}).project(findConfig).sort(sortConfig).toArray();
                }
                resolve(result);
            } catch (e) {
                console.log(e);
                reject(e);
            }
        });
    }

    findOne(parameters, findConfig) {
        return new Promise(async (resolve, reject) => {
            try {
                let db = await Db.get();
                const result = db.collection(this.col).findOne(parameters).project(findConfig);
                resolve(result);
            } catch (e) {
                reject(e);
            }
        });
    }

    find(parameters, findConfig, sortConfig, limit) {
        return new Promise(async function (resolve, reject) {
            try {
                let result;
                let db = await Db.get();
                if (limit) {
                    result = await db.collection(this.col).find(parameters).project(findConfig).sort(sortConfig).limit(limit).toArray();
                } else {
                    result = await db.collection(this.col).find(parameters).project(findConfig).sort(sortConfig).toArray();
                }
                resolve(result)
            } catch (e) {
                reject(e)
            }
        });
    }

    insertOne(data) {
        return new Promise(async (resolve, reject) => {
            try {
                let db = await Db.get();
                await db.collection(this.col).insertOne(data);
                resolve();
            } catch (e) {
                reject(e);
            }
        })
    }

    deleteOneById(parameters) {
        return new Promise(async(resolve, reject) => {
            try {
                let db = await Db.get();
                await db.collection(this.col).deleteOne(data);
                resolve();
            } catch (e) {
                reject(e);
            }
        })
    }
    updateOneById(){

    }
}

module.exports = GenericDAO;