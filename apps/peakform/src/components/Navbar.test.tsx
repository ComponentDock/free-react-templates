import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo with peakform text', () => {
    render(<Navbar />)
    expect(screen.getByText('peak')).toBeInTheDocument()
    expect(screen.getByText('form')).toBeInTheDocument()
  })

  it('renders nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
  })

  it('renders social icons in top bar', () => {
    render(<Navbar />)
    const topBar = screen.getAllByRole('link')
    expect(topBar.length).toBeGreaterThan(0)
  })

  it('renders email contact', () => {
    render(<Navbar />)
    expect(screen.getByText(/info@peakform\.com/)).toBeInTheDocument()
  })

  it('renders phone contact', () => {
    render(<Navbar />)
    expect(screen.getByText(/\+1 234 567 890/)).toBeInTheDocument()
  })

  it('has classes dropdown that toggles', () => {
    render(<Navbar />)
    const classesLink = screen.getByRole('link', { name: /^classes$/i })
    expect(classesLink).toBeInTheDocument()
    // Hover to open dropdown
    fireEvent.mouseEnter(classesLink.parentElement!)
    expect(screen.getByText('Yoga')).toBeInTheDocument()
    // Hover out to close dropdown
    fireEvent.mouseLeave(classesLink.parentElement!)
    expect(screen.queryByText('Yoga')).not.toBeInTheDocument()
  })

  it('toggles mobile menu', () => {
    render(<Navbar />)
    const menuBtn = screen.getByRole('button', { name: /open menu/i })
    fireEvent.click(menuBtn)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })
})
