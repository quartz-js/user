import { Attributes } from '@quartz/core'
import { UserApi } from './../Api/UserApi'

export class UserAttribute extends Attributes.BelongsTo {
  constructor (name, options) {
    super(name, new UserApi())

    this.resourceConfig = () => { return require('./../Managers/UserManager').default };

    this.createComponent = {
      component: () => import('../../components/user/Resource/create')
    }

    this.updateComponent = {
      component: () => import('../../components/user/Resource/edit')
    }
  }
};
