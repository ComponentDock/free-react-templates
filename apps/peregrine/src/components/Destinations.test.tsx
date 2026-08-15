import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { destinationSectionTitle, destinations } from '../data'
import { Destinations } from './Destinations'

describe('Destinations', () => {
  it('renders the section heading and one card per destination', () => {
    render(<Destinations />)
    expect(
      screen.getByRole('heading', { level: 2, name: destinationSectionTitle }),
    ).toBeInTheDocument()

    for (const destination of destinations) {
      const card = screen
        .getByRole('heading', { level: 3, name: destination.title })
        .closest('article') as HTMLElement
      expect(card).toBeInTheDocument()
      expect(card).toHaveTextContent(destination.price)
      expect(card).toHaveTextContent(destination.tour)
      expect(card).toHaveTextContent(destination.reviews)
      expect(card.querySelector('img')).toHaveAttribute('src', destination.image)
      expect(card.querySelectorAll('svg')).toHaveLength(5)
    }
  })
})
