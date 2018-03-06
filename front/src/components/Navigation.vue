<template>
  <nav class="w-100 block relative border">
    <div class="w-4/5 mx-auto flex text-center py-2">
      <div class="nav__logo w-10">
        <img src="/dist/img/logo.svg" alt="logo" class="block max-w-full h-auto">
      </div>

      <ul class="flex block flex-auto text-center list-reset align-baseline justify-between">
        <li class="flex-1 py-3">Item 1</li>
        <li class="flex-1 py-3">Item 2</li>
        <li class="flex-1 py-3">Item 3</li>
        <li class="flex-1 py-3">Item 4</li>
      </ul>

      <div class="nav__avatar w-16">
        <img src="/dist/img/avatar.svg" alt="avatar" class="w-10 rounded-full">
      </div>

    </div><!-- nav wrapper -->
  </nav>
</template>

<script>
export default {
  name: 'navigation'
}
</script>

<style lang="less">

</style>
