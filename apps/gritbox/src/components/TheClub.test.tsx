import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { TheClub } from './TheClub'

describe('TheClub', () => {
  it('renders the section heading', () => {
    render(<TheClub />)
    expect(screen.getByText('The Club')).toBeInTheDocument()
  })

  it('renders the description paragraphs', () => {
    render(<TheClub />)
    expect(screen.getByText(/GritBox is more than just a gym/)).toBeInTheDocument()
    expect(screen.getByText(/Whether you are a beginner/)).toBeInTheDocument()
  })

  it('renders the Join Our Club button', () => {
    render(<TheClub />)
    expect(screen.getByText('Join Our Club')).toBeInTheDocument()
  })

  it('renders the gym image', () => {
    render(<TheClub />)
    const img = screen.getByAltText('Inside the GritBox gym facility')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('loading', 'lazy')
  })

  it('has an id of club on the section', () => {
    render(<TheClub />)
    expect(document.getElementById('club')).toBeTruthy()
  })
})
