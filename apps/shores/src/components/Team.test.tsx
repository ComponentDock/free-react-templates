import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Team } from './Team'

describe('Team', () => {
  it('renders section heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: /meet our volunteers/i })).toBeInTheDocument()
  })

  it('renders four team member cards', () => {
    render(<Team />)
    expect(screen.getByText('Alea Mirslava')).toBeInTheDocument()
    expect(screen.getByText('Adam Virland')).toBeInTheDocument()
    expect(screen.getByText('Sofia Chen')).toBeInTheDocument()
    expect(screen.getByText('Marcus Webb')).toBeInTheDocument()
  })

  it('displays roles for each member', () => {
    render(<Team />)
    expect(screen.getByText('Program Manager')).toBeInTheDocument()
    expect(screen.getByText('Operations Director')).toBeInTheDocument()
    expect(screen.getByText('Outreach Coordinator')).toBeInTheDocument()
    expect(screen.getByText('Volunteer Lead')).toBeInTheDocument()
  })

  it('renders social link icons', () => {
    render(<Team />)
    const socialLinks = screen.getAllByRole('link', {
      name: /facebook|twitter|instagram|email/i,
    })
    // 4 members * 4 social links = 16
    expect(socialLinks.length).toBe(16)
  })

  it('renders team member images with correct alt text', () => {
    render(<Team />)
    expect(screen.getByRole('img', { name: 'Alea Mirslava' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Adam Virland' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Sofia Chen' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Marcus Webb' })).toBeInTheDocument()
  })
})
