import { render, screen } from '@testing-library/react'
import { Banner } from './Banner'

describe('Banner', () => {
  it('renders the hero headline', () => {
    render(<Banner />)
    expect(screen.getByText(/New Era of/)).toBeInTheDocument()
    expect(screen.getByText(/Smartphones/)).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<Banner />)
    expect(screen.getByText('$530')).toBeInTheDocument()
    expect(screen.getByText('$460')).toBeInTheDocument()
  })

  it('renders the product name', () => {
    render(<Banner />)
    expect(screen.getByText('Apple iPhone 6s')).toBeInTheDocument()
  })

  it('renders the shop now button', () => {
    render(<Banner />)
    expect(screen.getByText('Shop Now')).toBeInTheDocument()
  })
})
