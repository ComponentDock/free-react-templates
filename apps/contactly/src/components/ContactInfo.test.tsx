import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactInfo } from './ContactInfo'

describe('ContactInfo', () => {
  it('renders the heading and subtext', () => {
    render(<ContactInfo />)
    expect(screen.getByRole('heading', { name: /let's get in touch/i })).toBeInTheDocument()
    expect(screen.getByText(/open for any suggestion/)).toBeInTheDocument()
  })

  it('displays address contact info', () => {
    render(<ContactInfo />)
    expect(screen.getByText(/address:/i)).toBeInTheDocument()
    expect(screen.getByText(/198 West 21th Street/)).toBeInTheDocument()
  })

  it('displays phone contact info', () => {
    render(<ContactInfo />)
    expect(screen.getByText(/phone:/i)).toBeInTheDocument()
    expect(screen.getByText(/1235 2355 98/)).toBeInTheDocument()
  })

  it('displays email contact info', () => {
    render(<ContactInfo />)
    expect(screen.getByText(/email:/i)).toBeInTheDocument()
    expect(screen.getByText(/info@yoursite.com/)).toBeInTheDocument()
  })

  it('displays website contact info', () => {
    render(<ContactInfo />)
    const websiteItems = screen.getAllByText(/yoursite\.com/)
    expect(websiteItems.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Website:/)).toBeInTheDocument()
  })

  it('has circular white icon containers', () => {
    render(<ContactInfo />)
    const icons = document.querySelectorAll('.rounded-full.bg-white')
    expect(icons.length).toBe(4)
  })
})
