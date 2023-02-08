import { shallowMount } from '@vue/test-utils';
import AlphabetKeyboard from '@/components/AlphabetKeyboard';


describe('AlphabetKeyboard', () => {
    const wrapper = shallowMount(AlphabetKeyboard);

    it('should contain 26 alphabet characters', () => {
        expect(wrapper.findAll('[data-test="letter"]')).toHaveLength(26);
    })

    it('should contain letters a and z', () => {
        expect(wrapper.text()).toContain('a');
        expect(wrapper.text()).toContain('z');
    })

    it('should have disabled class', async () => {
        await wrapper.setProps({
            isDisabled: true,
        })
        expect(wrapper.classes()).toContain('disable');
    })

    it('should not have disable class', async() => {
        await wrapper.setProps({
            isDisabled: false,
        })
        expect(wrapper.classes('disable')).toBe(false);
    })

    it('should add to usedLetters, selectLetter function', async () => {
        await wrapper.vm.selectLetter('a');
        expect(wrapper.vm.usedLetters).toContain('a')
    })

    it('should add to usedLetters on click', async () => {
        await wrapper.findAll('.letter')[0].trigger('click');
        expect(wrapper.vm.usedLetters).toContain('a')
    })
})