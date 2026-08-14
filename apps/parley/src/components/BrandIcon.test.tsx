import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'
import { socials } from '../data'

describe('BrandIcon', () => {
  it.each(socials)('renders an inline svg path for %s', (name) => {
    const { container } = render(<BrandIcon name={name} />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
    expect(svg!.querySelector('path')).toHaveAttribute('d')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('applies a custom className', () => {
    const { container } = render(<BrandIcon name="Facebook" className="h-6 w-6" />)
    expect(container.querySelector('svg')).toHaveClass('h-6 w-6')
  })
})
