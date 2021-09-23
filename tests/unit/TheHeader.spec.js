import configuration from '../../src/data/configuration.json'
import { shallowMount } from '@vue/test-utils'
import TheHeader from '../../src/components/TheHeader.vue'

describe('TheHeader.vue', () => {
  it('renders the header tag with a heading', () => {
    const wrapper = shallowMount(TheHeader)

    const header = wrapper.find('header')
    expect(header.exists()).toBeTruthy()

    const h1 = wrapper.find('h1')
    expect(h1.exists()).toBeTruthy()
    expect(h1.text()).toBe(configuration.title)
  })
})
