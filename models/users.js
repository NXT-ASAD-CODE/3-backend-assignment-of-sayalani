const fs = require('fs')
const path = require("path")
const bcrypt = require("bcrypt")
const Filepath = path.join(process.cwd(),"data","users.json")