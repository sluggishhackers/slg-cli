import {Auth, google} from 'googleapis'
import fs from 'node:fs'

const fetchAuth: ({scopes}: {scopes: string | string[] | undefined}) => Auth.GoogleAuth = ({scopes}) => {
  const keysEnvVar = process.env.GOOGLE_APPLICATION_CREDENTIALS
  if (!keysEnvVar) {
    throw new Error('The $GOOGLE_APPLICATION_CREDENTIALS environment variable was not found!')
  }

  const credentials = fs.readFileSync(keysEnvVar).toJSON()

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes,
  })

  return auth
}

export {fetchAuth}
