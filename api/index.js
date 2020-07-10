const express = require('express')

// Create express instance
const app = express()

// Test route
app.use('/test', (req, res) => {
  res.end('Test API!')
})

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
