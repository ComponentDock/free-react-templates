import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('renders logo and nav links', () => {
    render(<Header />)
    expect(screen.getByTestId('logo')).toHaveTextContent('Vizier')
    expect(screen.getByTestId('nav-desktop')).toBeInTheDocument()
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('toggles mobile menu', () => {
    render(<Header />)
    const toggle = screen.getByLabelText('Toggle menu')
    const nav = screen.getByTestId('nav-mobile')
    expect(nav).not.toHaveClass('block')
    fireEvent.click(toggle)
    expect(nav).toHaveClass('block')
    fireEvent.click(toggle)
    expect(nav).not.toHaveClass('block')
  })

  it('closes mobile menu when a link is clicked', () => {
    render(<Header />)
    const toggle = screen.getByLabelText('Toggle menu')
    fireEvent.click(toggle)
    const nav = screen.getByTestId('nav-mobile')
    expect(nav).toHaveClass('block')
    // Click the first mobile nav link
    const mobileLinks = nav.querySelectorAll('a')
    fireEvent.click(mobileLinks[0]!)
    expect(nav).not.toHaveClass('block')
  })
})
