import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Speakers } from './Speakers'

describe('Speakers', () => {
  it('renders the section heading and eyebrow', () => {
    render(<Speakers />)
    expect(screen.getByText('World-Class Speakers')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Learn From the Best' })).toBeInTheDocument()
    expect(screen.getByText(/Industry leaders and innovators/i)).toBeInTheDocument()
  })

  it('renders all six speakers with talk title, name, role and social links', () => {
    render(<Speakers />)
    const names = [
      'Dr. Sarah Chen',
      'Marcus Johnson',
      'Elena Rodriguez',
      'David Kim',
      'Aisha Patel',
      'James Wright',
    ]
    for (const name of names) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }

    expect(screen.getByText('The Future of AI: Beyond Large Language Models')).toBeInTheDocument()
    expect(screen.getByText('Chief AI Officer, OpenMind Labs')).toBeInTheDocument()

    // Social links on the first speaker card
    expect(screen.getByRole('link', { name: /dr\. sarah chen on x/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /dr\. sarah chen on linkedin/i })).toBeInTheDocument()
  })
})
