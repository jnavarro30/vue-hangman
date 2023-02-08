import { shallowMount } from '@vue/test-utils';
import HeaderTitle from '@/components/HeaderTitle';

describe('HeaderTitle.vue', () => {
    const wrapper = shallowMount(HeaderTitle);

    it('should render title', () => {
        const title = wrapper.get('[data-test="title"]').text();
        expect(wrapper.text()).toBe(title);
    })
})