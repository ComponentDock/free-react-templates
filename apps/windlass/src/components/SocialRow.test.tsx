import { render, screen } from '@testing-library/react'
import { SocialRow } from './SocialRow'
import { SOCIAL } from '../lib/site'

describe('SocialRow — four circles at the card’s right end', () => {
  it('links all four platforms to their real profiles, in order', () => {
    render(<SocialRow />)

    const links = screen.getAllByRole('link')

    expect(links.map((link) => link.getAttribute('aria-label'))).toEqual(
      SOCIAL.map((item) => item.label),
    )

    for (const link of links) {
      expect(link.getAttribute('href')).toMatch(/^https:\/\//)
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noreferrer')
    }
  })

  it('draws every circle itself: 40px, 50% rounded, hairline ring, shrinking to 30px below 992px', () => {
    render(<SocialRow />)

    const list = screen.getByTestId('social')

    expect(list.className).toContain('lg:order-last')

    for (const link of screen.getAllByRole('link')) {
      expect(link.className).toContain('rounded-full')
      expect(link.className).toContain('size-10')
      expect(link.className).toContain('border-ring')
      expect(link.className).toContain('max-lg:size-[30px]')
      expect(link.querySelector('svg')).not.toBeNull()
      expect(link.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    }
  })

  it('shows four distinct marks rather than one repeated glyph', () => {
    const { container } = render(<SocialRow />)
    const marks = Array.from(container.querySelectorAll('svg')).map((mark) => mark.innerHTML)

    expect(marks).toHaveLength(4)
    expect(new Set(marks).size).toBe(4)
  })
})
