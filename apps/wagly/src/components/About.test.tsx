import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, sub heading, image, and copy', () => {
    render(<About />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toBe("It's a Dog Life")

    expect(screen.getByText('Curious story of Dogs')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /happy dog/i })).toBeInTheDocument()
    expect(screen.getByText(/far from the everyday rush/i)).toBeInTheDocument()
  })
})
