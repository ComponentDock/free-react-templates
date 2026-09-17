import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the site name and logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Scholarly')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = [
      'Home',
      'About',
      'Academics',
      'Admissions',
      'Courses',
      'Athletics',
      'Campus Life',
    ]
    for (const link of links) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('marks Home as active with a green underline', () => {
    render(<Navbar />)
    const homeLink = screen.getByText('Home')
    expect(homeLink).toHaveClass('border-primary-400')
  })

  it('renders a search button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('has a white background', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation')).toHaveClass('bg-white')
  })
})
