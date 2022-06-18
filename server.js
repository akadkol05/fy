const app = require("./app")
const port = 4000
const connectDatabase = require("./config/database")

connectDatabase()

const server = app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})