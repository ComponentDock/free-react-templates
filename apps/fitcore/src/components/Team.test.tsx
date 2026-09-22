import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the team section heading', () => {
    render(<Team />)
    expect(screen.getByText('Our Team Members')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /Our Most Experienced Trainers/,
    )
  })

  it('shows three trainer cards with names and roles', () => {
    render(<Team />)
    expect(screen.getByText('Jordan Blake')).toBeInTheDocument()
    expect(screen.getByText('Head Trainer')).toBeInTheDocument()
    expect(screen.getByText('Casey Rivera')).toBeInTheDocument()
    expect(screen.getByText('Strength Coach')).toBeInTheDocument()
    expect(screen.getByText('Morgan Hayes')).toBeInTheDocument()
    expect(screen.getByText('Fitness Director')).toBeInTheDocument()
  })

  it('shows social link icons for each trainer', () => {
    render(<Team />)
    expect(screen.getAllByLabelText('Facebook')).toHaveLength(3)
    expect(screen.getAllByLabelText('Twitter')).toHaveLength(3)
    expect(screen.getAllByLabelText('Website')).toHaveLength(3)
    expect(screen.getAllByLabelText('Instagram')).toHaveLength(3)
  })

  it('has a More Services link', () => {
    render(<Team />)
    expect(screen.getByRole('link', { name: 'More Services' })).toHaveAttribute('href', '#services')
  })
})
