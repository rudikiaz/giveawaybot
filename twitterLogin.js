const propertiesReader = require('properties-reader');
const properties = propertiesReader('credentials.properties');
console.log(properties)

const { Chromeless } = require('chromeless')

async function run() {
  const chromeless = new Chromeless({launchChrome: false})
  
  const screenshot = await chromeless
    .setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.50 Safari/537.36')
    .goto('https://www.twitter.com')
    .type('chromeless', 'input[name="q"]')
    .press(13)
    .wait('#resultStats')

  console.log("hola") 

  await chromeless.end()
}

run().catch(console.error.bind(console))