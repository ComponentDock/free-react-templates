import { render, screen } from '@testing-library/react'
import { MainNav } from './MainNav'

describe('MainNav', () => {
  it('renders the categories button', () => {
    render(<MainNav />)
    expect(screen.getByText('Categories')).toBeInTheDocument()
  })

  it('renders main navigation items', () => {
    render(<MainNav />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Super Deals')).toBeInTheDocument()
    expect(screen.getByText('Featured Brands')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('has correct aria-label', () => {
    render(<MainNav />)
    expect(screen.getByLabelText('Main navigation')).toBeInTheDocument()
  })
})
