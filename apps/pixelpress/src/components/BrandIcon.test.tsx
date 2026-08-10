import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'
import { socials } from '../data'

describe('BrandIcon', () => {
  it('renders an accessible-hidden svg with the brand path', () => {
    const { container } = render(<BrandIcon name="twitter" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg?.querySelector('path')).toHaveAttribute('d', expect.stringContaining('M23.953'))
  })

  it('renders every configured social brand', () => {
    const { container } = render(
      <div>
        {socials.map((name) => (
          <BrandIcon key={name} name={name} className="h-4 w-4" />
        ))}
      </div>,
    )
    expect(container.querySelectorAll('svg')).toHaveLength(socials.length)
  })
})
