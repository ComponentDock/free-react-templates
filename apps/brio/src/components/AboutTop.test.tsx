import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AboutTop } from './AboutTop'

describe('AboutTop', () => {
  it('renders two feature items with headings and descriptions', () => {
    render(<AboutTop />)
    const headings = screen.getAllByText('Becoming A DVD Repair Expert Online')
    expect(headings).toHaveLength(2)
    const descriptions = screen.getAllByText(/lorem ipsum dolor sit amet/i)
    expect(descriptions.length).toBeGreaterThanOrEqual(2)
  })

  it('renders the about image', () => {
    render(<AboutTop />)
    const img = screen.getByAltText('About our app')
    expect(img).toBeInTheDocument()
  })
})
