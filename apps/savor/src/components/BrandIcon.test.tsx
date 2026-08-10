import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon } from './BrandIcon'
import { socialLinks } from '../data'

describe('BrandIcon', () => {
  it('renders an accessible-hidden svg for every social brand', () => {
    const { container } = render(
      <div>
        {socialLinks.map((name) => (
          <BrandIcon key={name} name={name} />
        ))}
      </div>,
    )
    expect(container.querySelectorAll('svg')).toHaveLength(socialLinks.length)
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('applies a custom className', () => {
    const { container } = render(<BrandIcon name="pinterest" className="h-6 w-6" />)
    expect(container.querySelector('svg')).toHaveClass('h-6', 'w-6')
  })
})
