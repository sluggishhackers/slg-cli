import {expect, test} from '@oclif/test'

const CREDENTIAL_PROJECT_ID = 'noritake-b81de'

describe('googleapps', () => {
  test
    .stdout()
    .command(['googleapps:auth'])
    .it('runs googleapps:auth', (ctx) => {
      expect(ctx.stdout).to.contain(CREDENTIAL_PROJECT_ID)
    })
})
