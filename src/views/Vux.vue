<template>
  <div>
    <h3>vux 的示例</h3>
    <group>
      <cell title="vue" value="cool"></cell>
    </group>
    <group>
      <datetime title="select a date"></datetime>
    </group>
    <group>
      <calendar :value.sync="value" title="Date Picker"></calendar>
    </group>
  </div>
</template>

<script>
import Group from 'vux-components/group'
import Cell from 'vux-components/cell'
import Datetime from 'vux-components/datetime'
import Calendar from 'vux-components/calendar'

console.log('Vux.vue')

export default {
  components: {
    Group,
    Cell,
    Datetime,
    Calendar
  }
}
</script>

<style>
@import '~vux/dist/vux.css';
</style>
