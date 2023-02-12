import { mount } from '@vue/test-utils';
import MainGame from '@/components/MainGame';
import HeaderTitle from '@/components/HeaderTitle';
import ChosenWord from '@/components/ChosenWord';
import AlphabetKeyboard from '@/components/AlphabetKeyboard';
import CanvasScreen from '@/components/CanvasScreen';
import 'jest-canvas-mock';
require('whatwg-fetch')

// global.fetch = jest.fn(() => 
//     Promise.resolve({
//         json: () => Promise.resolve('hello')
//     })
// )

describe('MainGame.vue', () => {
    const wrapper = mount(MainGame);

    it('should render all child components', () => {
        const  headerTitle = wrapper.findComponent(HeaderTitle);
        const  chosenWord = wrapper.findComponent(ChosenWord);
        const  alphabetKeyboard = wrapper.findComponent(AlphabetKeyboard);
        const  canvasScreen = wrapper.findComponent(CanvasScreen);
        const components =  [headerTitle, chosenWord, alphabetKeyboard, canvasScreen];

        components.forEach(component => {
            expect(component.exists()).toBe(true);
        })
    })

    it('should trigger newWord function', async () => {
        let buttonOne = wrapper.findAll('button')[0];
        await buttonOne.trigger('click');
        expect(wrapper.vm.newWord()).toHaveBeenCalled(1);
     })



    // it('button click should fetch word', async () => {
    //     // shallowMount(CanvasScreen);
    //     // const wrapper = shallowMount(MainGame);
    //     // await wrapper.vm.newWord();
    //     // let fetchedWord = await wrapper.vm.chosenWord;
    //     // expect(fetch).toHaveBeenCalledTimes(1);
    //     // expect(fetchedWord).toEqual('hello');
    //     console.log(wrapper.vm,  '@@@@@@@@@')
    // })
})