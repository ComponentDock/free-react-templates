import { render, screen } from '@testing-library/react'
import { HomeBanner } from './HomeBanner'

describe('HomeBanner', () => {
  it('renders heading', () => {
    render(<HomeBanner />)
    expect(screen.getByText('Georgia Helmet Collections!')).toBeInTheDocument()
  })

  it('renders description', () => {
    render(<HomeBanner />)
    expect(screen.getByText(/Discover our premium selection/)).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<HomeBanner />)
    expect(screen.getByText('View Collection')).toBeInTheDocument()
  })

  it('renders product image', () => {
    render(<HomeBanner />)
    expect(screen.getByAltText('Featured helmet product')).toBeInTheDocument()
  })
})
