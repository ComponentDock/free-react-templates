import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { InfoCards } from './InfoCards'
import { infoCards } from '../data'

describe('InfoCards', () => {
  it('renders the three-card band on the mint background', () => {
    render(<InfoCards />)

    expect(screen.getByRole('region', { name: 'Practice information' })).toHaveClass('bg-mint-band')
    for (const card of infoCards) {
      expect(screen.getByRole('heading', { name: card.heading })).toBeInTheDocument()
    }
  })

  it('renders the emergency phone number as a callable link', () => {
    render(<InfoCards />)

    expect(screen.getByText('1-800-600-3800')).toHaveAttribute('href', 'tel:18006003800')
  })

  it('renders the opening hours lines', () => {
    render(<InfoCards />)

    expect(screen.getByText('Monday – Friday')).toBeInTheDocument()
    expect(screen.getByText('Saturday – Sunday')).toBeInTheDocument()
  })

  it('renders the white pill buttons for every card', () => {
    render(<InfoCards />)

    for (const card of infoCards) {
      const button = screen.getByRole('button', { name: card.buttonLabel })
      expect(button).toHaveClass('rounded-full')
    }
  })
})
