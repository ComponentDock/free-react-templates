import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('LEARNOVA')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Online Courses')).toBeInTheDocument()
    expect(screen.getByText('Categories')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders Login and Register links', () => {
    render(<Navbar />)
    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.getByText('Register')).toBeInTheDocument()
  })

  it('has a navigation landmark', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('toggles Online Courses dropdown on click', () => {
    render(<Navbar />)
    const toggle = screen.getAllByText('Online Courses')[0]!
    fireEvent.click(toggle)
    expect(screen.getByText('Web Development')).toBeInTheDocument()
  })

  it('toggles Categories dropdown on click', () => {
    render(<Navbar />)
    const toggle = screen.getAllByText('Categories')[0]!
    fireEvent.click(toggle)
    expect(screen.getByText('Design')).toBeInTheDocument()
  })

  it('has transparent background class', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    expect(nav.className).toContain('absolute')
  })
})
