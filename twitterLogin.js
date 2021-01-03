const propertiesReader = require('properties-reader');
const properties = propertiesReader('credentials.properties');
const { Chromeless } = require('chromeless')



async function run() { 
  const chromeless = new Chromeless({launchChrome: true})
  
  const twitterLogin = await chromeless
    .setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.50 Safari/537.36')
    .goto('https://twitter.com/login')
    .wait(800)
    .type(properties.get('username'), 'input[name="session[username_or_email]"]')
    .wait(300)
    .type(properties.get('password'), 'input[name="session[password]"]')
    .wait(250)
    .click('div[class="css-18t94o4 css-1dbjc4n r-urgr8i r-42olwf r-sdzlij r-1phboty r-rs99b7 r-1w2pmg r-vlx1xi r-zg41ew r-1jayybb r-17bavie r-1ny4l3l r-15bsvpr r-o7ynqc r-6416eg r-lrvibr"]')
  
  await chromeless.end()
}

run().catch(console.error.bind(console))