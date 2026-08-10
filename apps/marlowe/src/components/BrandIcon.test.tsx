import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'
import { socialLinks } from '../data'

describe('BrandIcon', () => {
  it('renders an svg for each supported brand', () => {
    render(
      <div>
        {socialLinks.map((name) => (
          <BrandIcon key={name} name={name} />
        ))}
      </div>,
    )
    const icons = document.querySelectorAll('svg')
    expect(icons).toHaveLength(socialLinks.length)
    for (const icon of icons) {
      expect(icon).toHaveAttribute('aria-hidden', 'true')
    }
  })

  it('applies a custom className', () => {
    render(<BrandIcon name="facebook" className="h-8 w-8" />)
    expect(document.querySelector('svg')).toHaveClass('h-8', 'w-8')
  })
})
