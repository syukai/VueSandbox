<template>
    <div>
        <span v-if="isAmode">{{model.value}}です</span>
        <span v-else>{{model.value}}かも</span>
    </div>
</template>

<script>/*
export default {
    name: 'card',
    props: ['model', 'mode'],
    data() {
        return {};
    },
    computed: {
        isAmode() {
            return this.mode === 'A';
        }
    }
}*/
</script>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
// import Vue from 'vue'
import myModel from '@/shims-myModel'
@Component({})
export default class Card extends Vue{
    @Prop() model!: any;
    @Prop() mode!: string;
    @Prop() emp!: myModel.Employee;

    /** computed */
    get isAmode() {
        return this.mode === 'A';
    }
}
</script>
