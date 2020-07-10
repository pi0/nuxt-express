const { loadNuxt, build } = require('nuxt')

const main = async () => {
  const nuxt = await loadNuxt({ for: 'dev' })
  build(nuxt)
  await nuxt.listen(3000)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
