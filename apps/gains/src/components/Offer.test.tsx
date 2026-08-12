import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Offer } from './Offer'

describe('Offer', () => {
  it('renders the section title and four course cards', () => {
    render(<Offer />)

    expect(screen.getByText('best Courses')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Why you Join with us' }),
    ).toBeInTheDocument()

    for (const title of [
      'Fitness Training',
      'Body Building',
      'Cardio & Conditioning',
      'Yoga & Mobility',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('renders a gradient arrow button inside every card overlay', () => {
    render(<Offer />)

    const cards = document.querySelectorAll('a.group')
    expect(cards).toHaveLength(4)
    expect(cards[0]?.querySelector('svg')).toBeInTheDocument()
  })
})
