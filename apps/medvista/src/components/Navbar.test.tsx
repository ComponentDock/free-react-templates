import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Medvista/i })).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Department' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Doctors' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders Appointment CTA button', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Appointment/i })).toBeInTheDocument()
  })

  it('has a mobile hamburger button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })

  it('toggles mobile nav on hamburger click', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /Open menu/i })
    fireEvent.click(toggle)
    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()
    expect(screen.getByLabelText('Mobile')).toBeInTheDocument()
  })

  it('closes mobile nav when a link is clicked', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /Open menu/i })
    fireEvent.click(toggle)
    const mobileLink = screen.getByLabelText('Mobile').querySelector('a')
    fireEvent.click(mobileLink!)
    expect(screen.queryByLabelText('Mobile')).not.toBeInTheDocument()
  })
})
