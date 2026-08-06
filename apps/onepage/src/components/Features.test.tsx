import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading and at least three feature cards with titles and blurbs', () => {
    render(<Features />)

    expect(screen.getByRole('heading', { name: /Everything You Need/ })).toBeInTheDocument()

    const cardTitles = ['Lightning Fast', 'Fully Responsive', 'Easy to Customize']
    for (const title of cardTitles) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(/lorem ipsum/i).length).toBeGreaterThanOrEqual(3)
  })
})
