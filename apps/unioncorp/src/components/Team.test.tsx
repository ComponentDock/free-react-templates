import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders section heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Leadership Team')
  })

  it('renders all 4 team members', () => {
    render(<Team />)
    expect(screen.getByText('Jason Smith')).toBeInTheDocument()
    expect(screen.getByText('Jeffrey Rockenson')).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Laura Chen')).toBeInTheDocument()
  })

  it('renders role labels', () => {
    render(<Team />)
    expect(screen.getByText('President & CEO')).toBeInTheDocument()
    expect(screen.getByText('Executive Vice President')).toBeInTheDocument()
    expect(screen.getByText('General Manager')).toBeInTheDocument()
    expect(screen.getByText('Strategic Consultant')).toBeInTheDocument()
  })

  it('renders social icons for each member', () => {
    render(<Team />)
    const socialIcons = screen.getAllByLabelText('X')
    expect(socialIcons.length).toBeGreaterThanOrEqual(4)
  })

  it('applies custom className', () => {
    const { container } = render(<Team className="extra" />)
    expect(container.firstElementChild).toHaveClass('extra')
  })
})
