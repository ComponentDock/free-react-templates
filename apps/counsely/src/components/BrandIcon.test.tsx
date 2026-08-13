import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an accessible-hidden svg with the brand path', () => {
    const { container } = render(<BrandIcon name="twitter" />)
    const svg = container.querySelector('svg')
    expect(svg).not.toBeNull()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg!.querySelector('path')).toHaveAttribute('d', expect.stringMatching(/^M/))
  })

  it('renders a filled path for each supported brand', () => {
    const { container } = render(
      <>
        <BrandIcon name="facebook" />
        <BrandIcon name="instagram" />
      </>,
    )
    expect(container.querySelectorAll('svg path').length).toBe(2)
  })
})
