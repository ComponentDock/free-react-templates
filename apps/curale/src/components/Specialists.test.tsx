import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Specialists } from './Specialists'
import { doctors } from '../data'

describe('Specialists', () => {
  it('renders the section heading with the fixed typo and subtitle', () => {
    render(<Specialists />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Specialists' })).toBeInTheDocument()
  })

  it('renders four doctor cards with photo, name, role, blurb and social links', () => {
    const { container } = render(<Specialists />)
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(doctors.length)
    for (const doctor of doctors) {
      expect(screen.getByRole('heading', { level: 3, name: doctor.name })).toBeInTheDocument()
    }
    // Roles and blurbs repeat across the four cards in the source.
    expect(screen.getAllByText('sr. faculty data science')).toHaveLength(2)
    expect(screen.getAllByText('sr. faculty plastic surgery')).toHaveLength(2)
    expect(screen.getAllByText(doctors[0]!.copy)).toHaveLength(doctors.length)
    const nameBars = container.querySelectorAll('.bg-surface-alt')
    expect(nameBars).toHaveLength(doctors.length)
    expect(nameBars[0]).toHaveClass('group-hover:bg-gradient-to-r')
    const socialLinks = screen.getAllByRole('link')
    expect(socialLinks.length).toBeGreaterThanOrEqual(doctors.length * 4)
  })
})
