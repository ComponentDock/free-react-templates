import { render } from '@testing-library/react'
import { brandIcons } from './BrandIcons'

describe('brandIcons', () => {
  it('draws both social glyphs as inline SVGs hidden from assistive technology', () => {
    const { container } = render(
      <div>
        <brandIcons.twitter data-testid="twitter" />
        <brandIcons.facebook data-testid="facebook" />
      </div>,
    )

    for (const testId of ['twitter', 'facebook']) {
      const svg = container.querySelector(`[data-testid="${testId}"]`) as SVGElement

      expect(svg.tagName.toLowerCase()).toBe('svg')
      expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(svg.querySelector('path')).not.toBeNull()
    }
  })
})
