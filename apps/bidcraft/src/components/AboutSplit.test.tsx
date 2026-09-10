import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AboutSplit } from './AboutSplit'

describe('AboutSplit', () => {
  it('renders the About Us heading', () => {
    render(<AboutSplit />)
    expect(screen.getByRole('heading', { name: /About.*Us/ })).toBeInTheDocument()
  })

  it('renders Fast Support feature', () => {
    render(<AboutSplit />)
    expect(screen.getByRole('heading', { name: 'Fast Support' })).toBeInTheDocument()
    expect(screen.getByText(/dedicated team provides quick assistance/)).toBeInTheDocument()
  })

  it('renders 24/7 Support feature', () => {
    render(<AboutSplit />)
    expect(screen.getByRole('heading', { name: '24/7 Support' })).toBeInTheDocument()
    expect(screen.getByText(/Round-the-clock customer service/)).toBeInTheDocument()
  })

  it('has the About Us landmark', () => {
    render(<AboutSplit />)
    expect(screen.getByLabelText('About Us')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<AboutSplit />)
    expect(screen.getByAltText('About Bidcraft')).toBeInTheDocument()
  })
})
