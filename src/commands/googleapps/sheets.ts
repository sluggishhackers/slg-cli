import {Command} from '@oclif/core'

// import * as google from '../../libs/google.js'

export default class GoogleAppsAuth extends Command {
  static args = {}

  static description = 'Commands for Google Apps - Sheets'

  static flags = {}

  async run(): Promise<void> {
    // const auth = await google.fetchAuth({
    //   scopes: [
    //     'https://www.googleapis.com/auth/drive',
    //     'https://www.googleapis.com/auth/drive.file',
    //     'https://www.googleapis.com/auth/drive.readonly',
    //     'https://www.googleapis.com/auth/spreadsheets',
    //     'https://www.googleapis.com/auth/spreadsheets.readonly',
    //   ],
    // })

    this.log('Google Apps - Spreadsheet! (./src/commands/googleapps/sheets.ts)')
  }
}
