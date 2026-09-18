import { render, screen } from '@testing-library/react'
import { Team } from './Team'
import { describe, expect, it } from 'vitest'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Team')
  })

  it('renders all three team members', () => {
    render(<Team />)
    expect(screen.getByText('Alex Rivera')).toBeInTheDocument()
    expect(screen.getByText('Jordan Lee')).toBeInTheDocument()
    expect(screen.getByText('Casey Morgan')).toBeInTheDocument()
  })

  it('renders team member roles', () => {
    render(<Team />)
    expect(screen.getByText('Web Designer')).toBeInTheDocument()
    expect(screen.getByText('Developer')).toBeInTheDocument()
    expect(screen.getByText('Creative Director')).toBeInTheDocument()
  })

  it('renders team member images', () => {
    render(<Team />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
  })

  it('renders social link aria-labels', () => {
    render(<Team />)
    expect(screen.getByLabelText('Alex Rivera on Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Jordan Lee on Twitter')).toBeInTheDocument()
  })
})
