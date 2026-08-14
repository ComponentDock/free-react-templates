import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon } from './BrandIcon'

const socials = ['facebook', 'twitter', 'linkedin', 'instagram'] as const

describe('BrandIcon', () => {
  it.each(socials)('renders a decorative inline svg for %s', (name) => {
    const { container } = render(<BrandIcon name={name} />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg!.querySelector('path')).toHaveAttribute('d', expect.stringContaining('M'))
  })

  it('accepts a className override', () => {
    const { container } = render(<BrandIcon name="facebook" className="h-5 w-5" />)
    expect(container.querySelector('svg')).toHaveAttribute('class', 'h-5 w-5')
  })
})
