import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { socials } from '../data'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an inline SVG for every social brand with the default size', () => {
    render(
      <div>
        {socials.map((name) => (
          <BrandIcon key={name} name={name} />
        ))}
      </div>,
    )

    const svgs = document.querySelectorAll('svg')
    expect(svgs).toHaveLength(socials.length)
    for (const svg of svgs) {
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(svg.querySelector('path')).not.toBeNull()
    }
  })

  it('applies a custom className when provided', () => {
    const { container } = render(<BrandIcon name="facebook" className="h-6 w-6 text-brand" />)

    expect(container.querySelector('svg')).toHaveClass('h-6', 'w-6', 'text-brand')
  })

  it('renders only the requested brand', () => {
    const { container } = render(<BrandIcon name="instagram" />)

    expect(container.querySelectorAll('svg')).toHaveLength(1)
    expect(screen.queryByTestId('brand-twitter')).not.toBeInTheDocument()
  })
})
