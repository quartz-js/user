<template>
  <div>
    <router-view :config="config"></router-view>
  </div>
</template>
<script>

import user from '../../app/Managers/UserManager'

export default {
  data () {
    return {
      user: user
    }
  }
}
</script>
