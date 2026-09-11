import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent(/Our\s*Philosophy/)
  })

  it('renders the philosophy description paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/The automated process starts/)).toBeInTheDocument()
    expect(screen.getByText(/Aenean faucibus nibh/)).toBeInTheDocument()
  })

  it('renders the CEO name and title', () => {
    render(<About />)
    expect(screen.getByText('Capcilena Hanry')).toBeInTheDocument()
    expect(screen.getByText('CEO, Advisory')).toBeInTheDocument()
  })

  it('has the background image with aria-hidden', () => {
    render(<About />)
    const bg = document.querySelector('[aria-hidden="true"]')
    expect(bg).toBeInTheDocument()
  })
})
