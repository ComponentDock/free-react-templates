import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Treatments } from './Treatments'

describe('Treatments', () => {
  it('renders the section heading and subtext', () => {
    render(<Treatments />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Our treatment keeps you smile/i }),
    ).toBeInTheDocument()
  })

  it('renders five distinct treatment cards with icons', () => {
    render(<Treatments />)
    const titles = [
      'Teeth Whitening',
      'Teeth Cleaning',
      'Quality Brackets',
      'Modern Anesthetic',
      'Dental Implants',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 4, name: title })).toBeInTheDocument()
    }
    const cards = screen.getAllByRole('heading', { level: 4 })
    expect(cards).toHaveLength(5)
    expect(document.querySelectorAll('svg')).toHaveLength(5)
  })

  it('gives each card a bordered, centered layout', () => {
    render(<Treatments />)
    const first = screen
      .getByRole('heading', { level: 4, name: 'Teeth Whitening' })
      .closest('article')
    expect(first?.className).toContain('border')
    expect(first?.className).toContain('text-center')
  })
})
