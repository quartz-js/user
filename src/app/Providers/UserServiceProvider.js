import { ServiceProvider } from '@railken/quartz-core'
import { container } from '@railken/quartz-core'

export class UserServiceProvider extends ServiceProvider {
  register() {

    this.addRoutes('app', require('./../../routes/user.js'))

    this.addData({
      name: 'user',
      description: 'Configure your application',
      tags: ['data'],
      route: { name: 'users.index' },
    })

    this.addLang({
      'en': require('../../../lang/user/en.json'),
      'it': require('../../../lang/user/it.json')
    })
  }
}