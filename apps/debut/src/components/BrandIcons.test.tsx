import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { FacebookIcon, TwitterIcon, YoutubeIcon } from './BrandIcons'

describe('BrandIcons', () => {
  it('draws each mark as an accessible-hidden 24×24 svg', () => {
    const { container } = render(
      <p>
        <FacebookIcon className="size-4" />
        <TwitterIcon />
        <YoutubeIcon />
      </p>,
    )

    const icons = container.querySelectorAll('svg')
    expect(icons).toHaveLength(3)

    for (const icon of icons) {
      expect(icon).toHaveAttribute('viewBox', '0 0 24 24')
      expect(icon).toHaveAttribute('aria-hidden', 'true')
      expect(icon).toHaveAttribute('fill', 'currentColor')
      expect(icon.querySelector('path')).toBeInTheDocument()
    }

    expect(icons[0]).toHaveClass('size-4')
  })
})
