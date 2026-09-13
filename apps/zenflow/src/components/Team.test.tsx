import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the team heading', () => {
    render(<Team />)
    expect(screen.getByText('Meet Our Team')).toBeInTheDocument()
  })

  it('renders all team members', () => {
    render(<Team />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('Mike Johnson')).toBeInTheDocument()
    expect(screen.getByText('Sarah Williams')).toBeInTheDocument()
  })

  it('renders member roles', () => {
    render(<Team />)
    expect(screen.getByText('CEO & Founder')).toBeInTheDocument()
    expect(screen.getByText('Creative Director')).toBeInTheDocument()
    expect(screen.getByText('Lead Developer')).toBeInTheDocument()
    expect(screen.getByText('Marketing Manager')).toBeInTheDocument()
  })

  it('renders member images', () => {
    render(<Team />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })

  it('shows social icons on hover', () => {
    render(<Team />)
    const firstArticle = screen.getByText('John Doe').closest('article')!
    fireEvent.mouseEnter(firstArticle)
    expect(screen.getAllByLabelText('John Doe Facebook').length).toBe(1)
    expect(screen.getAllByLabelText('John Doe Twitter').length).toBe(1)
    expect(screen.getAllByLabelText('John Doe LinkedIn').length).toBe(1)
    expect(screen.getAllByLabelText('John Doe Dribbble').length).toBe(1)
  })

  it('hides social icons on mouse leave', () => {
    render(<Team />)
    const firstArticle = screen.getByText('John Doe').closest('article')!
    fireEvent.mouseEnter(firstArticle)
    expect(screen.getAllByLabelText('John Doe Facebook').length).toBe(1)
    fireEvent.mouseLeave(firstArticle)
    expect(screen.queryByLabelText('John Doe Facebook')).not.toBeInTheDocument()
  })
})
