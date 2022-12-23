import { mount } from '@vue/test-utils';
import ChosenWord from '../../src/components/ChosenWord';

describe('ChosenWord.vue', () => {
    it('should render hiddenWord', () => {
        const wrapper = mount(ChosenWord);
        const hiddenWord = wrapper.get('[data-test="hiddenWord"]').text();
        expect(wrapper.text()).toBe(hiddenWord);
    })
})