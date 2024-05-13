import {Command, Flags} from '@oclif/core'

export default class Hello extends Command {
  static description = 'Explore contents managed by ogk(opengirok cheatkey'

  static examples = [
    `$ slg ogk:contents --repo foia-data-opengirok
{
    data: [{
        name	"2022-11-11_문서등록대장에_관한_청구",
        type	"dir",
        path	"2022-11-11_문서등록대장에_관한_청구"
    }]
}
`,
  ]

  static flags = {
    org: Flags.string({description: 'Org to explore', required: false}),
    path: Flags.string({description: 'Path to explore', required: false}),
    repo: Flags.string({description: 'Repository to explore', required: true}),
  }

  async run(): Promise<void> {
    const {flags} = await this.parse(Hello)
    const endpoint = `https://api.sluggish.at/api/ogk/contents?org=${flags.org || ''}&repo=${flags.repo}&path=${
      flags.path || ''
    }`
    const response = await fetch(endpoint).then((res) => res.json())
    this.log(response.data)
  }
}
