import { mount } from '@vue/test-utils';
import HeaderTitle from '../../src/components/HeaderTitle';

describe('HeaderTitle.vue', () => {
    it('should render title', () => {
        const wrapper = mount(HeaderTitle);
        const title = wrapper.get('[data-test="title"]').text();
        expect(wrapper.text()).toBe(title);
    })
})