
<template>
  
  <div>
    
    <sound-pad v-for="( pad, i ) in config.pads" :config="pad" :context="context" :dest="dest" :key="i"/>

  </div>

</template>

<style lang="scss"></style>

<script>

  import SoundPad from './SoundPad.vue';
  
  export default {

    props: [ 'config', 'context', 'dest', ],

    components: {

      SoundPad,

    }

  };

</script>
