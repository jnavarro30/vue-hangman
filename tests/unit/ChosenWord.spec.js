import { shallowMount } from '@vue/test-utils';
import ChosenWord from '../../src/components/ChosenWord';

describe('ChosenWord.vue', () => {
    const wrapper = shallowMount(ChosenWord, {
        propsData: {
            hiddenWord: 'mock',
        }
    });

    it('should render hiddenWord', () => {
        const hiddenWord = wrapper.get('[data-test="hiddenWord"]').text();
        expect(wrapper.text()).toBe(hiddenWord);
    })

    it('should contain passed props', () => {
        expect(wrapper.props().hiddenWord).toBe('mock');
    })
})