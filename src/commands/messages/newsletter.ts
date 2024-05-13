import {Command} from '@oclif/core'

export default class Newsletter extends Command {
  async run(): Promise<void> {
    this.log('Messages - newsletter! (./src/commands/messages/newsletter.ts)')
  }
}
