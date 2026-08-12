import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SPEAKERS } from '../data'
import { Speakers } from './Speakers'

describe('Speakers', () => {
  it('renders the heading and a card for every speaker', () => {
    render(<Speakers />)
    expect(screen.getByText('Our Speakings')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: /Who’s Speaking/ })).toBeInTheDocument()
    for (const speaker of SPEAKERS) {
      expect(screen.getByRole('heading', { level: 5, name: speaker.name })).toBeInTheDocument()
      expect(screen.getByText(speaker.role)).toBeInTheDocument()
    }
  })

  it('renders four social links per speaker with accessible names', () => {
    render(<Speakers />)
    const socialLinks = screen.getAllByRole('link', {
      name: / on (Facebook|Twitter|Instagram|LinkedIn)$/,
    })
    expect(socialLinks).toHaveLength(SPEAKERS.length * 4)
  })

  it('renders a View All Speaker pill below the grid', () => {
    render(<Speakers />)
    expect(screen.getByRole('link', { name: /View All Speaker/i })).toHaveAttribute(
      'href',
      '#speakers',
    )
  })
})
