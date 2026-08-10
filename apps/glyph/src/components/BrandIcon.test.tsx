import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrandIcon } from './BrandIcon'

const socials = [
  { name: 'facebook', label: 'Facebook' },
  { name: 'twitter', label: 'Twitter' },
  { name: 'behance', label: 'Behance' },
  { name: 'dribbble', label: 'Dribbble' },
  { name: 'github', label: 'GitHub' },
] as const

describe('BrandIcon', () => {
  it('renders every brand as a labeled link with an inline SVG', () => {
    const { container } = render(
      <>
        {socials.map((social) => (
          <BrandIcon key={social.name} name={social.name} label={social.label} />
        ))}
      </>,
    )

    for (const social of socials) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }
    expect(container.querySelectorAll('svg')).toHaveLength(socials.length)
    expect(container.querySelectorAll('svg path')).toHaveLength(socials.length)
  })

  it('merges the muted color for dark footers', () => {
    render(<BrandIcon name="twitter" label="Twitter" color="muted" />)

    const link = screen.getByRole('link', { name: 'Twitter' })
    expect(link.className).toContain('text-[#777777]')
    expect(link.className).not.toContain('text-ink')
    expect(link.querySelector('svg')!.getAttribute('class')).toContain('h-4')
  })
})
