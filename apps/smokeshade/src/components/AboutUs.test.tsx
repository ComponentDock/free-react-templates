import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutUs } from './AboutUs'

describe('AboutUs', () => {
  it('renders the heading', () => {
    render(<AboutUs />)
    expect(screen.getByText('About Story')).toBeInTheDocument()
  })

  it('renders an image', () => {
    render(<AboutUs />)
    expect(screen.getByRole('img', { name: /about us/i })).toBeInTheDocument()
  })

  it('renders two paragraphs', () => {
    render(<AboutUs />)
    const section = screen.getByRole('region')
    const paragraphs = section.querySelectorAll('p')
    expect(paragraphs.length).toBeGreaterThanOrEqual(2)
  })

  it('renders a Read More button', () => {
    render(<AboutUs />)
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument()
  })
})
