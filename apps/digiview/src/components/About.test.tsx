import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders about heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: /About/i })).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<About />)
    expect(screen.getByText(/passionate team/i)).toBeInTheDocument()
  })

  it('renders learn more link', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /Learn more/i })).toHaveAttribute('href', '#contact')
  })

  it('renders about image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /About DigiView team/i })).toBeInTheDocument()
  })
})
