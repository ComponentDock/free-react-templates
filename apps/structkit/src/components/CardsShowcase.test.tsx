import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CardsShowcase } from './CardsShowcase'

describe('CardsShowcase', () => {
  it('renders the four card treatments in order', () => {
    render(<CardsShowcase />)

    expect(screen.getByRole('heading', { level: 2, name: 'Cards Styles' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 5, name: 'Special title treatment' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Go somewhere' })).toHaveAttribute('href', '#cards')
    expect(screen.getByRole('heading', { level: 5, name: 'Card title' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 5, name: 'Nadia Kern' })).toBeInTheDocument()
    expect(screen.getByText('A Web Designer Based from London')).toBeInTheDocument()
    expect(screen.getByText('Available for Freelance')).toBeInTheDocument()
  })

  it('uses placeholder imagery for the three card images', () => {
    render(<CardsShowcase />)

    expect(screen.getByAltText('Round card illustration')).toHaveClass('rounded-full')
    expect(screen.getByAltText('Card cover').getAttribute('src')).toContain('structkit-card-image')
    expect(screen.getByAltText('Profile portrait').getAttribute('src')).toContain(
      'structkit-profile',
    )
  })
})
