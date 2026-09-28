import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Background } from './Background'

describe('Background', () => {
  it('renders a fixed full-screen background container', () => {
    const { container } = render(<Background />)
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper).toHaveClass('fixed', 'inset-0', 'z-0')
  })

  it('applies the page background color', () => {
    const { container } = render(<Background />)
    const inner = container.querySelector('.bg-page-bg')
    expect(inner).toBeTruthy()
  })
})
