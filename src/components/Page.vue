
<template>
  
  <div>
    
    <draggable v-model="config.pads">
      <sound-pad v-for="( pad, i ) in config.pads" :config="pad" :dest="dest" :key="i"/>
    </draggable>

  </div>

</template>

<style lang="scss"></style>

<script>

  import draggable from 'vuedraggable';

  import SoundPad from './SoundPad.vue';
  
  export default {

    props: [ 'config', 'dest', ],

    components: {

      SoundPad,
      draggable,

    }

  };

</script>
