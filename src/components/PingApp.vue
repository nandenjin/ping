
<template>
  
  <div>
    
    <page :config="app.pages[0]" :dest="dest" />

  </div>

</template>

<style lang="scss"></style>

<script>

  import Page from './Page.vue';

  const context = new AudioContext();
  const dest = context.destination;

  context.suspend();
  
  export default {

    components: {

      Page,

    },

    data: () => {

      return {

        app: {

          pages: [

            {

              pads: [

                { id: 'ding' }, { id: 'ding' }

              ]

            }

          ]

        },

        context: context,
        dest: dest,

      }

    },

  };

</script>
