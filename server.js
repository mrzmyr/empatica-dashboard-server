const app = require('./app')
const PORT = process.env.PORT || 3001

app.listen(PORT, (err) => {
  if (err) throw err
  console.log(`Server ready on http://localhost:${PORT}`)
})
