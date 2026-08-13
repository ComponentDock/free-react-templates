import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Lawyers } from './Lawyers'
import { LAWYERS, SOCIAL_LINKS } from '../data'

describe('Lawyers', () => {
  it('renders the title and three lawyer cards with name, role and portrait', () => {
    const { container } = render(<Lawyers />)

    expect(screen.getByRole('heading', { name: 'Our Lawyers' })).toBeInTheDocument()

    for (const lawyer of LAWYERS) {
      expect(screen.getByRole('heading', { name: lawyer.name })).toBeInTheDocument()
      expect(screen.getByText(lawyer.role)).toBeInTheDocument()
      expect(screen.getByRole('img', { name: `Portrait of ${lawyer.name}` })).toHaveAttribute(
        'src',
        lawyer.image,
      )
    }
    expect(container.querySelectorAll('img').length).toBe(LAWYERS.length)
  })

  it('renders three gold-on-cream rounded social links per lawyer', () => {
    render(<Lawyers />)

    for (const lawyer of LAWYERS) {
      for (const social of SOCIAL_LINKS) {
        const link = screen.getByRole('link', {
          name: `${lawyer.name} on ${social.label}`,
        })
        expect(link).toHaveAttribute('href', social.href)
        expect(link.className).toContain('bg-cream-chip')
        expect(link.className).toContain('rounded-[10px]')
        expect(link.className).toContain('text-brand')
      }
    }
  })
})
