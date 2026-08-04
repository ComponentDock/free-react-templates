import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading, button, and adoption stats', () => {
    render(<About />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toContain('We care your pet')
    expect(screen.getByRole('button', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByText('452')).toBeInTheDocument()
    expect(screen.getByText('Pets Available')).toBeInTheDocument()
  })
})
