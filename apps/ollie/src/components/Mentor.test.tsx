import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Mentor } from './Mentor'

describe('Mentor', () => {
  it('renders both mentor row headings', () => {
    render(<Mentor />)
    expect(screen.getByRole('heading', { level: 2, name: 'Personal Coaching' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Group Sessions' })).toBeInTheDocument()
  })

  it('renders images for both rows', () => {
    render(<Mentor />)
    expect(screen.getByAltText('Personal Coaching')).toBeInTheDocument()
    expect(screen.getByAltText('Group Sessions')).toBeInTheDocument()
  })

  it('renders checklist items for Personal Coaching', () => {
    render(<Mentor />)
    expect(screen.getByText('Custom training plans')).toBeInTheDocument()
    expect(screen.getByText('Progress video analysis')).toBeInTheDocument()
    expect(screen.getByText('Mental game coaching')).toBeInTheDocument()
    expect(screen.getByText('Competition prep')).toBeInTheDocument()
  })

  it('renders checklist items for Group Sessions', () => {
    render(<Mentor />)
    expect(screen.getByText('Weekly group rides')).toBeInTheDocument()
    expect(screen.getByText('Skill-level matching')).toBeInTheDocument()
    expect(screen.getByText('Guest pro skaters')).toBeInTheDocument()
    expect(screen.getByText('Social skate events')).toBeInTheDocument()
  })

  it('renders descriptive text', () => {
    render(<Mentor />)
    expect(screen.getByText(/personalized mentorship from experienced skaters/)).toBeInTheDocument()
    expect(screen.getByText(/learn alongside fellow skaters/)).toBeInTheDocument()
  })
})
