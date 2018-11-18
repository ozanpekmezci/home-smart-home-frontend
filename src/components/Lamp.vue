<template>
    <div class="lamp">
        <div class="frame" :class='{active:on}'>
            <svg xmlns="http://www.w3.org/2000/svg" id="bulb" viewBox="0 0 69.5 83.7"><path d="M57.4 8.1C48.5.7 39.7 0 34.8 0S21 .7 12.1 8.1C3.2 15.5-1.1 26.4.3 38c1.1 8.9 5.5 14.6 10.2 20.7 1.6 2.1 3.3 4.2 4.8 6.5 5.6 8.3 5 17 5 17.1 0 .4.1.8.4 1 .3.3.6.4 1 .4h26.4c.4 0 .7-.2 1-.4.3-.3.4-.6.4-1 0-.1-.5-8.7 5-17.1 1.5-2.3 3.2-4.4 4.8-6.5C64 52.6 68.4 46.9 69.5 38c1.1-11.6-3.2-22.5-12.1-29.9z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="base" viewBox="0 0 28.7 13.1"><g><g><path d="M27.2 3H1.5C.7 3 0 2.3 0 1.5S.7 0 1.5 0h25.7c.8 0 1.5.7 1.5 1.5S28 3 27.2 3z"/></g><g><path d="M27.2 8H1.5C.7 8 0 7.3 0 6.5S.7 5 1.5 5h25.7c.8 0 1.5.7 1.5 1.5S28 8 27.2 8z"/></g><g><path d="M22.5 13.1H6.2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h16.2c.8 0 1.5.7 1.5 1.5s-.6 1.5-1.4 1.5z"/></g></g></svg>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Lamp',
  props: {
    on: false
  },
  data: function () {
    return {

    }
  }

}
</script>
