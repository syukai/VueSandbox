describe('Point.vue', () => {
    let wrapper: any;
it('ポイントがマイナスなら0にする', () => {
    wrapper.vm.form.points = 1;
    wrapper.vm.onValidPoint();
    expect(wrapper.vm.form.points).toBe(1);

    wrapper.vm.form.points = -1;
    wrapper.vm.onValidPoint();
    expect(wrapper.vm.form.points).toBe(0);
});
})