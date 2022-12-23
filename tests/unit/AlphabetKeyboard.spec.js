import { mount } from '@vue/test-utils';
import AlphabetKeyboard from '../../src/components/AlphabetKeyboard';

describe('AlphabetKeyboard', () => {
    it('should contain 26 alphabet characters', () => {
        const wrapper = mount(AlphabetKeyboard);
        expect(wrapper.findAll('[data-test="letter"]')).toHaveLength(26);
    })

    it('should have disable class', () => {
        const wrapper = mount(AlphabetKeyboard, {
            props: {
                isDisabled: true
            }
        });
        expect(wrapper.classes()).toContain('disable');
    })

    it('should not have disable class', () => {
        const wrapper = mount(AlphabetKeyboard, {
            props: {
                isDisabled: false
            }
        });
        expect(wrapper.classes('disable')).toBe(false);
    })
})