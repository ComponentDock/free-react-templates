import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: /Meet Our Doctors/i })).toBeInTheDocument()
  })

  it('renders all four team members', () => {
    render(<Team />)
    expect(screen.getByText('Dr. Ethel Davis')).toBeInTheDocument()
    expect(screen.getByText('Dr. Rodney Cooper')).toBeInTheDocument()
    expect(screen.getByText('Dr. Dane Walker')).toBeInTheDocument()
    expect(screen.getByText('Dr. Lena Keller')).toBeInTheDocument()
  })

  it('renders roles for each member', () => {
    render(<Team />)
    expect(screen.getByText('Chief of Cardiology')).toBeInTheDocument()
    expect(screen.getByText('Head of Neurology')).toBeInTheDocument()
    expect(screen.getByText('Orthopedic Surgeon')).toBeInTheDocument()
    expect(screen.getByText('Pediatric Specialist')).toBeInTheDocument()
  })

  it('renders team member images', () => {
    render(<Team />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })

  it('renders social icons for each member', () => {
    render(<Team />)
    const facebookLinks = screen.getAllByLabelText('Facebook')
    expect(facebookLinks.length).toBe(4)
  })
})
