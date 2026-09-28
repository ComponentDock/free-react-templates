import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SpecialDishes } from './SpecialDishes'

describe('SpecialDishes', () => {
  it('renders the section heading and both special dishes', () => {
    render(<SpecialDishes />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Our special/i)
    expect(heading.textContent).toMatch(/dishes/i)

    expect(screen.getByRole('heading', { name: /Grilled Beef with potatoes/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Grilled Chicken special/i })).toBeInTheDocument()

    expect(screen.getAllByText('$29.00')).toHaveLength(2)
    expect(screen.getByText('01.')).toBeInTheDocument()
    expect(screen.getByText('02.')).toBeInTheDocument()
  })

  it('has Book a Table links for each dish', () => {
    render(<SpecialDishes />)

    const links = screen.getAllByRole('link', { name: /book a table/i })
    expect(links).toHaveLength(2)
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', '#contact')
    })
  })
})
