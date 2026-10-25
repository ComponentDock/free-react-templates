import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SocialIcon } from './SocialIcon'

describe('SocialIcon', () => {
  it('draws each brand mark inline at the requested size', () => {
    for (const network of ['Twitter', 'Facebook', 'Instagram', 'Linkedin']) {
      const { container, unmount } = render(<SocialIcon network={network} className="size-4" />)
      const svg = container.querySelector('svg')

      expect(svg).toHaveAttribute('data-network', network)
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(svg).toHaveClass('size-4')
      expect(svg?.querySelector('path')?.getAttribute('d')).toContain('M')

      unmount()
    }
  })

  it('renders without a size class when none is given', () => {
    const { container } = render(<SocialIcon network="Twitter" />)

    expect(container.querySelector('svg')).not.toHaveAttribute('class')
  })
})
