import { render } from '@testing-library/react'
import { Container } from './Container'
import { containerClass, flushContainerClass } from '../lib/styles'

describe('Container — the box the page is built on', () => {
  it('carries the four tiers and 15px gutters by default', () => {
    const { getByTestId } = render(
      <Container>
        <span>inside</span>
      </Container>,
    )

    const box = getByTestId('container')

    expect(box.className).toBe(containerClass)
    expect(box.className).toContain('px-[15px]')
    expect(box.className).toContain('sm:max-w-[540px]')
    expect(box.className).toContain('md:max-w-[720px]')
    expect(box.className).toContain('lg:max-w-[960px]')
    expect(box.className).toContain('xl:max-w-[1140px]')
    expect(box.textContent).toBe('inside')
  })

  it('drops both gutters for the one band that runs edge-to-edge', () => {
    const { getByTestId } = render(
      <Container flush>
        <span>inside</span>
      </Container>,
    )

    const box = getByTestId('container-flush')

    expect(box.className).toBe(flushContainerClass)
    expect(box.className).not.toContain('px-[15px]')
    expect(box.className).toContain('px-0')
  })
})
