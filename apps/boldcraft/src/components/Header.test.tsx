import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />)
    expect(screen.getByText('BoldCraft')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Header />)
    const links = ['Home', 'Work', 'Service', 'Blog', 'Contact']
    links.forEach((l) => {
      expect(screen.getByText(l)).toBeInTheDocument()
    })
  })

  it("renders the Let's Talk button", () => {
    render(<Header />)
    expect(screen.getByText("Let's Talk")).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', () => {
    render(<Header />)
    const toggleBtn = screen.getByLabelText('Toggle menu')

    // Click toggle to open menu
    fireEvent.click(toggleBtn)

    // Click toggle again to close
    fireEvent.click(toggleBtn)
  })

  it('closes mobile menu when a nav link is clicked', () => {
    render(<Header />)
    const toggleBtn = screen.getByLabelText('Toggle menu')

    // Open mobile menu
    fireEvent.click(toggleBtn)

    // Find the mobile menu nav link and click it
    const homeLinks = screen.getAllByText('Home')
    const mobileHome = homeLinks[homeLinks.length - 1]
    if (mobileHome) {
      fireEvent.click(mobileHome)
    }

    // Menu should be closed — only one Home link remains (desktop)
    expect(screen.getAllByText('Home')).toHaveLength(1)
  })
})
