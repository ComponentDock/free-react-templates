import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProductTabs } from './ProductTabs'

describe('ProductTabs', () => {
  it('renders default Best Sellers tab', () => {
    render(<ProductTabs />)
    expect(screen.getByText('Best Sellers')).toBeInTheDocument()
    expect(screen.getByText('Piqué Biker Jacket')).toBeInTheDocument()
  })

  it('switches to New Arrivals tab', async () => {
    const user = userEvent.setup()
    render(<ProductTabs />)
    await user.click(screen.getByText('New Arrivals'))
    expect(screen.getByText('Ankle Boots')).toBeInTheDocument()
    expect(screen.getByText('T-shirt Contrast Pocket')).toBeInTheDocument()
  })

  it('switches to Hot Sales tab', async () => {
    const user = userEvent.setup()
    render(<ProductTabs />)
    await user.click(screen.getByText('Hot Sales'))
    expect(screen.getByText('Wool Blend Coat')).toBeInTheDocument()
  })

  it('renders product prices', () => {
    render(<ProductTabs />)
    expect(screen.getByText('$67.24')).toBeInTheDocument()
  })

  it('renders sale badges', () => {
    render(<ProductTabs />)
    expect(screen.getAllByText('Sale').length).toBeGreaterThan(0)
  })

  it('renders add to cart buttons', () => {
    render(<ProductTabs />)
    const cartButtons = screen.getAllByText('Add To Cart')
    expect(cartButtons.length).toBeGreaterThan(0)
  })

  it('renders compare buttons', () => {
    render(<ProductTabs />)
    const compareButtons = screen.getAllByLabelText('Compare')
    expect(compareButtons.length).toBeGreaterThan(0)
  })
})
