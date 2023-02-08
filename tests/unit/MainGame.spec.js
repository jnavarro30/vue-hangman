import { shallowMount } from '@vue/test-utils';
import MainGame from '../../src/components/MainGame';
import CanvasScreen from '../../src/components/CanvasScreen';
import 'jest-canvas-mock';
require('whatwg-fetch')

// global.fetch = jest.fn(() => 
//     Promise.resolve({
//         json: () => Promise.resolve('hello')
//     })
// )

describe('MainGame.vue', () => {
    it ('button click should fetch word', async () => {
        // shallowMount(CanvasScreen);
        // const wrapper = shallowMount(MainGame);
        // await wrapper.vm.newWord();
        // let fetchedWord = await wrapper.vm.chosenWord;
        // expect(fetch).toHaveBeenCalledTimes(1);
        // expect(fetchedWord).toEqual('hello');
    })
})