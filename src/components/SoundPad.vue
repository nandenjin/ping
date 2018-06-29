
<template>
  
  <div @click="play">{{ config.id }}</div>

</template>

<style lang="scss"></style>

<script>

  import { collection } from '../sounds/index.js';
  
  export default {

    props: [ 'config', 'dest', ],

    data() {

      return {

        buffer: null,

      };

    },

    mounted() {

      this.loadSrc();

    },

    methods: {

      loadSrc() {

        this.buffer = null;

        if( !this.config.id ) return;

        const resource = collection[ this.config.id ];
        const src = '/sounds/' + resource.src;

        fetch( src ).then( res => {

          if( res.ok ) return res.arrayBuffer();
          else throw new Error( res.status + ' ' + res.statusText + ': ' + res.url );

        } ).then( arrayBuffer => {

          return new Promise( ( done, err ) => this.context.decodeAudioData( arrayBuffer, r => done( r ), e => err( e ) ) );

        } ).then( buffer => {

          this.$emit( 'ready' );
          this.buffer = buffer;

        } )
        .catch( e => {

          console.error( e );

        } );

      },


      play() {

        if( !this.buffer ) return false;

        this.context.resume();

        const source = this.context.createBufferSource();
        source.buffer = this.buffer;

        source.connect( this.dest );
        source.start( 0 );

      },

    },

    computed: {

      context() {

        return this.dest.context;

      },

    },

    watch: {

      config() {

        this.loadSrc();

      }

    }

  };

</script>
