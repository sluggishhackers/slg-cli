import {expect, test} from '@oclif/test'

describe('ogk:contents', () => {
  test
    .stdout()
    .command(['ogk:contents', '--repo', 'foia-data-opengirok'])
    .it('runs ogk:contents --repo foia-data-opengirok', (ctx) => {
      expect(ctx.stdout).to.contain('[')
    })
})
