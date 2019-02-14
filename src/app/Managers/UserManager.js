import { UserApi } from '../Api/UserApi'
import { Attributes, Manager } from '@railken/quartz-core'

export default new Manager({
  name: 'user',
  route: 'users',
  manager: new UserApi(),
  icon: require('../../assets/user-icon.svg'),
  attributes: [
    new Attributes.Id(),
    new Attributes.Base('name'),
    new Attributes.Base('email'),
    new Attributes.Base('password'),
    new Attributes.DateTime('created_at'),
    new Attributes.DateTime('updated_at')
  ]
})
