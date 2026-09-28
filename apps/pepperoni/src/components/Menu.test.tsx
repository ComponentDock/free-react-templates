import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Menu } from './Menu'

describe('Menu', () => {
  it('shows the heading and tab buttons', () => {
    render(<Menu />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Hot Pizza Meals')
    expect(screen.getByRole('button', { name: /Pizza/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Drinks/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Burgers/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Pasta/i })).toBeInTheDocument()
  })

  it('shows Pizza tab items by default', () => {
    render(<Menu />)
    expect(screen.getByText('Italian Pizza')).toBeInTheDocument()
    expect(screen.getByText('Greek Pizza')).toBeInTheDocument()
    expect(screen.getByText('Caucasian Pizza')).toBeInTheDocument()
  })

  it('switches to Drinks tab on click', async () => {
    const user = userEvent.setup()
    render(<Menu />)
    await user.click(screen.getByRole('button', { name: /Drinks/i }))
    expect(screen.getByText('Fresh Lemonade')).toBeInTheDocument()
    expect(screen.getByText('Iced Tea')).toBeInTheDocument()
    expect(screen.getByText('Craft Cola')).toBeInTheDocument()
  })

  it('switches to Burgers tab on click', async () => {
    const user = userEvent.setup()
    render(<Menu />)
    await user.click(screen.getByRole('button', { name: /Burgers/i }))
    expect(screen.getByText('Classic Burger')).toBeInTheDocument()
    expect(screen.getByText('Cheese Burger')).toBeInTheDocument()
  })

  it('switches to Pasta tab on click', async () => {
    const user = userEvent.setup()
    render(<Menu />)
    await user.click(screen.getByRole('button', { name: /Pasta/i }))
    expect(screen.getByText('Spaghetti Carbonara')).toBeInTheDocument()
    expect(screen.getByText('Penne Arrabbiata')).toBeInTheDocument()
  })

  it('shows Add to Cart buttons', () => {
    render(<Menu />)
    const buttons = screen.getAllByRole('button', { name: /Add to Cart/i })
    expect(buttons.length).toBeGreaterThan(0)
  })
})
