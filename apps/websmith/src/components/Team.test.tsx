import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the eyebrow and heading', () => {
    render(<Team />)
    expect(screen.getByText('Meet The Team')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Creative Minds/i })).toBeInTheDocument()
  })

  it('renders both team members with names and roles', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: 'James Anderson' })).toBeInTheDocument()
    expect(screen.getByText('CEO, Co-Founder')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Chris Peters' })).toBeInTheDocument()
    expect(screen.getByText('CTO, Co-Founder')).toBeInTheDocument()
  })

  it('renders team member photos', () => {
    render(<Team />)
    expect(screen.getByRole('img', { name: /Photo of James Anderson/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
    expect(screen.getByRole('img', { name: /Photo of Chris Peters/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('renders biography paragraphs for each member', () => {
    render(<Team />)
    expect(screen.getByText(/15 years of experience/i)).toBeInTheDocument()
    expect(screen.getByText(/technical mastermind/i)).toBeInTheDocument()
  })

  it('renders two team member cards', () => {
    render(<Team />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    const memberHeadings = headings.filter(
      (h) => h.textContent === 'James Anderson' || h.textContent === 'Chris Peters',
    )
    expect(memberHeadings).toHaveLength(2)
  })
})
