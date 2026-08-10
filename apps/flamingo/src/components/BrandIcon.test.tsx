import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BrandIcon } from './BrandIcon'
import { footerSocials } from '../data'

describe('BrandIcon', () => {
  it('renders an inline SVG for every social name', () => {
    const { container } = render(
      <div>
        {footerSocials.map((name) => (
          <BrandIcon key={name} name={name} />
        ))}
      </div>,
    )

    const icons = container.querySelectorAll('svg')
    expect(icons).toHaveLength(footerSocials.length)
    icons.forEach((icon) => {
      expect(icon).toHaveAttribute('aria-hidden', 'true')
      expect(icon.querySelector('path')).not.toBeNull()
    })
  })
})
