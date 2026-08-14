import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an accessible-hidden svg for each brand', () => {
    const { container } = render(<BrandIcon name="pinterest" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg!.querySelector('path')).toHaveAttribute('d', expect.stringContaining('M12.017'))
  })

  it('applies the default size class and an override', () => {
    const { container } = render(<BrandIcon name="behance" />)
    expect(container.querySelector('svg')).toHaveAttribute('class', 'h-5 w-5')

    const { container: overridden } = render(<BrandIcon name="dribbble" className="h-4 w-4" />)
    expect(overridden.querySelector('svg')).toHaveAttribute('class', 'h-4 w-4')
  })

  it('supports every social brand used by the template', () => {
    for (const name of ['pinterest', 'facebook', 'twitter', 'dribbble', 'behance'] as const) {
      const { container } = render(<BrandIcon name={name} />)
      expect(container.querySelector('path')).toHaveAttribute('d', expect.any(String))
    }
  })
})
