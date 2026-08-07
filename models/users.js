const fs = require('fs')
const path = require("path")
const bcrypt = require("bcrypt")
const Filepath = path.join(process.cwd(), "data", "users.json")
const readData = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(Filepath, (err, data) => {
            if (err) {
                return reject(err)
            }
            resolve(JSON.parse(data.toString()))
        })
    })
}
const writeData = () => {
    return new Promise((resolve, reject) => {
        fs.writeFile(Filepath, JSON.stringify(data), (err) => {
            if (err) {
                return reject(err)
            }
            resolve();
        })
    })
}
exports.createUser = async (email, password) => {
    try {
        const users = await readData();
        const matched = users.find((u) => u.email === email);
        if (matched) {
            throw new Error("users already exists")
        }
        else {
            const userId = Date.now();
            const ecpass = await bcrypt.hash(password, 12);
            writeData([...users, { email, password: ecpass, userId }])
        }
    } catch (error) {
        throw error;
    }
}
exports.findUser = async (email) => {
    try {
        const users = await readData();
        const matched = users.find((u) => u.email === email);
        return matched;
    } catch (error) {
        throw error;
    }
}