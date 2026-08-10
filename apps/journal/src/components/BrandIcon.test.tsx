import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { headerSocials } from '../data'
import { BrandIcon } from './BrandIcon'

describe('BrandIcon', () => {
  it('renders a labeled link with an inline SVG for every social', () => {
    render(
      <ul>
        {headerSocials.map((social) => (
          <li key={social.name}>
            <BrandIcon name={social.name} label={social.label} />
          </li>
        ))}
      </ul>,
    )

    for (const social of headerSocials) {
      const link = screen.getByRole('link', { name: social.label })
      expect(link.querySelector('svg')).toBeInTheDocument()
      expect(link.querySelector('path')).toHaveAttribute('d', expect.any(String))
    }
  })

  it('defaults to the ink color and supports the muted variant', () => {
    const { container } = render(
      <div>
        <BrandIcon name="facebook" label="Facebook" />
        <BrandIcon name="twitter" label="Twitter" color="muted" />
      </div>,
    )

    const links = container.querySelectorAll('a')
    expect(links[0]!.className).toContain('text-ink')
    expect(links[1]!.className).toContain('text-meta')
  })
})
