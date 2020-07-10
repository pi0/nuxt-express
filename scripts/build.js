process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const { loadNuxt, build } = require('nuxt')

const main = async () => {
  const nuxt = await loadNuxt({ for: 'build' })
  await build(nuxt)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
