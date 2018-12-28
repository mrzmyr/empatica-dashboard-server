const app = require('./app')
const PORT = process.PORT || 3001

app.listen(PORT, (err) => {
  if (err) throw err
  console.log(`Server ready on http://localhost:${PORT}`)
})
