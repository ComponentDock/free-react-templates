import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Leaders } from './Leaders'

describe('Leaders', () => {
  it('renders the heading, blurb, and four leader cards with name and role', () => {
    render(<Leaders />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/OUR LEADERS/i)
    expect(screen.getByText(/genuinely care about your student/i)).toBeInTheDocument()

    expect(screen.getByText('Tyler Reed')).toBeInTheDocument()
    expect(screen.getByText('Youth Pastor')).toBeInTheDocument()
    expect(screen.getByText('Jessica Reed')).toBeInTheDocument()
    expect(screen.getByText('Girls Ministry Director')).toBeInTheDocument()
    expect(screen.getByText('Marcus Johnson')).toBeInTheDocument()
    expect(screen.getByText('Guys Ministry Director')).toBeInTheDocument()
    expect(screen.getByText('Sofia Martinez')).toBeInTheDocument()
    expect(screen.getByText('Middle School Coordinator')).toBeInTheDocument()
  })

  it('shows an Instagram handle on every leader card', () => {
    render(<Leaders />)

    expect(screen.getByText('@pastortyler')).toBeInTheDocument()
    expect(screen.getByText('@jessreed')).toBeInTheDocument()
    expect(screen.getByText('@marcusj')).toBeInTheDocument()
    expect(screen.getByText('@sofia.ignite')).toBeInTheDocument()
  })

  it('renders the volunteer call-to-action', () => {
    render(<Leaders />)

    expect(screen.getByText('Want to Make a Difference?')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Become a Volunteer' })).toBeInTheDocument()
  })
})
