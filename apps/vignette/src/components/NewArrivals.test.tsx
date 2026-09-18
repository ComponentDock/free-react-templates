import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { NewArrivals } from './NewArrivals'

describe('NewArrivals', () => {
  it('renders the section heading', () => {
    render(<NewArrivals />)
    expect(screen.getByRole('heading', { name: 'New Arrivals' })).toBeInTheDocument()
  })

  it('renders all filter buttons', () => {
    render(<NewArrivals />)
    expect(screen.getByRole('button', { name: 'ALL' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'WOMEN' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'MAN' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'ACCESSORIES' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'SHOES' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'KIDS' })).toBeInTheDocument()
  })

  it('renders all 6 products by default', () => {
    render(<NewArrivals />)
    expect(screen.getByText('Jeans midi cocktail dress')).toBeInTheDocument()
    expect(screen.getByText('Elegant summer dress')).toBeInTheDocument()
    expect(screen.getByText('Leather crossbody bag')).toBeInTheDocument()
    expect(screen.getByText('Classic canvas sneakers')).toBeInTheDocument()
    expect(screen.getByText('Striped casual shirt')).toBeInTheDocument()
    expect(screen.getByText('Kids floral dress')).toBeInTheDocument()
  })

  it('filters products when a category is selected', async () => {
    const user = userEvent.setup()
    render(<NewArrivals />)
    await user.click(screen.getByRole('button', { name: 'SHOES' }))
    expect(screen.getByText('Classic canvas sneakers')).toBeInTheDocument()
    expect(screen.queryByText('Jeans midi cocktail dress')).not.toBeInTheDocument()
    expect(screen.queryByText('Kids floral dress')).not.toBeInTheDocument()
  })

  it('shows all products when ALL is clicked after filtering', async () => {
    const user = userEvent.setup()
    render(<NewArrivals />)
    await user.click(screen.getByRole('button', { name: 'SHOES' }))
    await user.click(screen.getByRole('button', { name: 'ALL' }))
    expect(screen.getByText('Jeans midi cocktail dress')).toBeInTheDocument()
    expect(screen.getByText('Kids floral dress')).toBeInTheDocument()
  })

  it('renders ADD TO CART links', () => {
    render(<NewArrivals />)
    const links = screen.getAllByText('ADD TO CART')
    expect(links.length).toBeGreaterThan(0)
  })
})
