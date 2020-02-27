import { mount, createLocalVue } from '@vue/test-utils'
import Cryflow from '../Cryflow.vue'

const localVue = createLocalVue()

describe('Cryflow', () => {

  function generateCryflow(options) {
    const el = {
      components: {
        Cryflow
      },
      template: `
        <cryflow :phrases="phrases" />
      `,
      data() {
        return {
          phrases: [
            'I am',
            'trying',
            'to be cryptic.'
          ]
        }
      }
    }

    return mount(el, {
      localVue,
      attachToDocument: true
    })
  }

  it('is a Vue instance', () => {
    const wrapper = generateCryflow()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = generateCryflow()
    expect(wrapper.element).toMatchSnapshot()
  })
})