import {Command} from '@oclif/core'

import * as google from '../../libs/google.js'

export default class GoogleAppsAuth extends Command {
  static description = 'Commands for Google Apps - Auth'

  async run(): Promise<void> {
    const auth = await google.fetchAuth({
      scopes: ['https://www.googleapis.com/auth/drive'],
    })

    this.log('Google Apps - Auth! (./src/commands/googleapps/auth.ts)')
    this.log('Project ID:', await auth.getProjectId())
  }
}
