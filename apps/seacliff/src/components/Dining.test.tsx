import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Dining } from './Dining'

describe('Dining', () => {
  it('renders the heading and three venue cards with descriptions and hours', () => {
    render(<Dining />)

    expect(screen.getByRole('heading', { name: 'Culinary Excellence' })).toBeInTheDocument()

    for (const name of ['The Azure', 'Coral Bar', 'Sunrise Cafe']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }

    expect(screen.getByText('Contemporary Fine Dining')).toBeInTheDocument()
    expect(screen.getByText('Dinner 6:00 PM – 11:00 PM')).toBeInTheDocument()
    expect(screen.getByText('Craft Cocktails & Small Plates')).toBeInTheDocument()
    expect(screen.getByText('Open 4:00 PM – 1:00 AM')).toBeInTheDocument()
    expect(screen.getByText('International Breakfast & Brunch')).toBeInTheDocument()
    expect(screen.getByText('Breakfast 6:30 AM – 11:00 AM')).toBeInTheDocument()
  })
})
