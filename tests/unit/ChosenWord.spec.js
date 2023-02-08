import { shallowMount } from '@vue/test-utils';
import ChosenWord from '@/components/ChosenWord';

describe('ChosenWord.vue', () => {
    const wrapper = shallowMount(ChosenWord);

    it('should render hiddenWord', () => {
        const hiddenWord = wrapper.get('[data-test="hiddenWord"]').text();
        expect(wrapper.text()).toBe(hiddenWord);
    })

    it('should contain passed props', async () => {
        await wrapper.setProps({
            hiddenWord: 'mock',
        })
        expect(wrapper.props().hiddenWord).toBe('mock');
    })
})