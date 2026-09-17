import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactSidebar } from './ContactSidebar'

describe('ContactSidebar', () => {
  it('renders the heading and subtext', () => {
    render(<ContactSidebar />)
    expect(screen.getByRole('heading', { name: /contact information/i })).toBeInTheDocument()
    expect(screen.getByText(/fill up the form/i)).toBeInTheDocument()
  })

  it('displays address contact info', () => {
    render(<ContactSidebar />)
    expect(screen.getByText(/address:/i)).toBeInTheDocument()
    expect(screen.getByText(/198 West 21th Street/)).toBeInTheDocument()
  })

  it('displays phone contact info', () => {
    render(<ContactSidebar />)
    expect(screen.getByText(/phone:/i)).toBeInTheDocument()
    expect(screen.getByText(/1235 2355 98/)).toBeInTheDocument()
  })

  it('displays email contact info', () => {
    render(<ContactSidebar />)
    expect(screen.getByText(/email:/i)).toBeInTheDocument()
    expect(screen.getByText(/info@yoursite.com/)).toBeInTheDocument()
  })

  it('has circular white icon containers', () => {
    render(<ContactSidebar />)
    const icons = document.querySelectorAll('.rounded-full.bg-white')
    expect(icons.length).toBe(3)
  })
})
