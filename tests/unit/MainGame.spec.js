import { mount } from '@vue/test-utils';
import MainGame from '../../src/components/MainGame';
import CanvasScreen from '../../src/components/CanvasScreen';
import 'jest-canvas-mock';
require('whatwg-fetch')

describe('MainGame.vue', () => {
    it ('button click should fetch word', async () => {
        mount(CanvasScreen);
        const wrapper = mount(MainGame);
        
    })
})