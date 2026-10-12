import { render } from '@testing-library/react'
import { SOCIALS } from '../lib/site'
import { SocialIcon } from './SocialIcon'

describe('SocialIcon', () => {
  it('draws each network’s own mark as an inline, undecorated svg', () => {
    for (const social of SOCIALS) {
      const { container } = render(<SocialIcon name={social.name} width={14} height={14} />)
      const svg = container.querySelector('svg')

      expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(svg).toHaveAttribute('fill', 'currentColor')
      expect(svg).toHaveAttribute('width', '14')
      expect(svg?.querySelector('path')?.getAttribute('d')?.length).toBeGreaterThan(100)
    }
  })

  it('never inlines an icon-font character or a repeat of another network’s path', () => {
    const paths = SOCIALS.map((social) => {
      const { container } = render(<SocialIcon name={social.name} />)

      return container.querySelector('path')?.getAttribute('d') ?? ''
    })

    expect(new Set(paths).size).toBe(SOCIALS.length)

    for (const path of paths) {
      expect(path).not.toContain('icon')
      expect(path).not.toMatch(/^[a-z]\d{3}$/)
    }
  })
})
