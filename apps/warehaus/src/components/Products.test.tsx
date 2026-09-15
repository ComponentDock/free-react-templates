import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Products } from '../components/Products'

describe('Products', () => {
  it('renders section heading', () => {
    render(<Products />)
    expect(screen.getByText('Products')).toBeInTheDocument()
  })

  it('renders category filter buttons', () => {
    render(<Products />)
    expect(screen.getByText('All')).toBeInTheDocument()
    expect(screen.getByText('Men')).toBeInTheDocument()
    expect(screen.getByText('Women')).toBeInTheDocument()
    expect(screen.getByText('Kids')).toBeInTheDocument()
  })

  it('shows all products by default', () => {
    render(<Products />)
    const images = screen.getAllByRole('img', { name: /Floral Jackquard Pullover/ })
    expect(images).toHaveLength(4)
  })

  it('filters products by category', async () => {
    const user = userEvent.setup()
    render(<Products />)
    await user.click(screen.getByText('Women'))
    const images = screen.getAllByRole('img', { name: /Floral Jackquard Pullover/ })
    expect(images).toHaveLength(2)
  })

  it('shows all when clicking All', async () => {
    const user = userEvent.setup()
    render(<Products />)
    await user.click(screen.getByText('Men'))
    await user.click(screen.getByText('All'))
    const images = screen.getAllByRole('img', { name: /Floral Jackquard Pullover/ })
    expect(images).toHaveLength(4)
  })

  it('renders add-to-cart buttons', () => {
    render(<Products />)
    const buttons = screen.getAllByRole('button', { name: /Add.*to cart/ })
    expect(buttons.length).toBeGreaterThan(0)
  })
})
