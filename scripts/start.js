process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const { loadNuxt } = require('nuxt-start')

const main = async () => {
  const nuxt = await loadNuxt({ for: 'start' })
  const { url } = await nuxt.listen()
  console.log('Listening on ' + url)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
