import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Specials } from './Specials'

describe('Specials', () => {
  it('renders the section heading', () => {
    render(<Specials />)

    expect(screen.getByText(/Our/)).toBeInTheDocument()
    expect(screen.getByText(/special/)).toBeInTheDocument()
    expect(screen.getByText(/dishes/)).toBeInTheDocument()
  })

  it('displays numbered dish items', () => {
    render(<Specials />)

    expect(screen.getByText('01.')).toBeInTheDocument()
    expect(screen.getByText('02.')).toBeInTheDocument()
  })

  it('shows dish names and prices', () => {
    render(<Specials />)

    expect(screen.getByRole('heading', { name: /Garlic/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /green beans/i })).toBeInTheDocument()
    expect(screen.getAllByText('$12.00').length).toBe(2)
    expect(screen.getByRole('heading', { name: /Lemon/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /rosemary chicken/i })).toBeInTheDocument()
  })

  it('has book a table links', () => {
    render(<Specials />)

    const links = screen.getAllByText(/book a table/i)
    expect(links.length).toBe(2)
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', '#contact')
    })
  })

  it('has the specials section id', () => {
    render(<Specials />)

    expect(document.getElementById('specials')).toBeInTheDocument()
  })
})
