import {expect, test} from '@oclif/test'

describe.skip('messages', () => {
  test
    .stdout()
    .command(['messages:alimtalk'])
    .it('runs messages:alimtalk', (ctx) => {
      expect(ctx.stdout).to.contain('Messages - alimtalk!')
    })
})
