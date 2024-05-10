import {expect, test} from '@oclif/test'

describe('googleapps', () => {
  test
    .stdout()
    .command(['googleapps:sheets'])
    .it('runs googleapps:sheets', (ctx) => {
      expect(ctx.stdout).to.contain('Google Apps - Spreadsheet!')
    })
})
