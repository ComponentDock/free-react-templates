import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FacebookIcon, InstagramIcon, TwitterIcon } from './BrandIcons'

describe('BrandIcons', () => {
  it('renders the three inline social glyphs', () => {
    const { container } = render(
      <div>
        <FacebookIcon data-testid="facebook" />
        <TwitterIcon data-testid="twitter" />
        <InstagramIcon data-testid="instagram" />
      </div>,
    )

    const icons = container.querySelectorAll('svg[data-testid]')
    expect(icons).toHaveLength(3)
    for (const icon of icons) {
      expect(icon).toHaveAttribute('aria-hidden', 'true')
      expect(icon).toHaveAttribute('viewBox', '0 0 24 24')
    }
  })
})
