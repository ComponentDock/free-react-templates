import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { socials } from '../data'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders an inline svg for every social brand', () => {
    const { container } = render(
      <>
        {socials.map((name) => (
          <BrandIcon key={name} name={name} />
        ))}
      </>,
    )

    expect(container.querySelectorAll('svg')).toHaveLength(socials.length)
    for (const svg of container.querySelectorAll('svg')) {
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(svg.querySelector('path')).not.toBeNull()
    }
  })

  it('applies a custom className', () => {
    const { container } = render(<BrandIcon name="facebook" className="h-6 w-6" />)
    expect(container.querySelector('svg')).toHaveClass('h-6', 'w-6')
  })
})
