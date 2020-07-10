process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const { loadNuxt } = require('nuxt-start')

const main = async () => {
  const nuxt = await loadNuxt({ for: 'start' })
  await nuxt.listen()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
