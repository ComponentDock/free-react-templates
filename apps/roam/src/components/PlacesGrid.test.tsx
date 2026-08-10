import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PlacesGrid } from './PlacesGrid'
import { placeCards, readMoreLabel } from '../data'

describe('PlacesGrid', () => {
  it('renders the section title and six staggered place cards', () => {
    const { container } = render(<PlacesGrid />)

    expect(
      screen.getByRole('heading', { name: 'Let Us Find Your Places Within a Sec.' }),
    ).toBeInTheDocument()
    for (const place of placeCards) {
      expect(screen.getByRole('link', { name: place.title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: readMoreLabel })).toHaveLength(placeCards.length)
    expect(screen.getByText(placeCards[0]!.excerpt)).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(placeCards.length)
  })
})
