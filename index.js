const Vimeo = require('vimeo').Vimeo

const clientID = '6f79355bb56b195a123596e7060f0a6bbab020b8'
const clientSecret = '2D8wilUihF55v04/4sBKkLgf7zWRQnVvXmVGK8CkF3q6uylWjNTZDIqekEq+feb7R4ilO29hrhszV87UlFgLw9Iwt6ERFBp4chY6kQ3kLjcYplcOKYriycf+3Wmnc0md'
const tokenPrivate = 'f4c68764ebf396b4102897530dbaf74b'
const tokenPublic = '128690690ded6fbc4d79a4fc9191a0f4'

const client = new Vimeo(clientID, clientSecret, tokenPrivate)
// const uri = '/users/98246695'

client.upload('./nodejslogo.mp4',
  function (uri) {
    console.log('Upload realizado com sucesso! Sua URI é', uri)
  },
  function (bytesUploaded, bytesTotal) {
    let percentage = (bytesUploaded / bytesTotal * 100).toFixed(2)
    console.log(bytesUploaded, bytesTotal, percentage + '%')
  },
  function (error) {
    console.log('Failed because: ' + error)
  }
)