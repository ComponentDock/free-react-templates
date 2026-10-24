import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('About Us')
  })

  it('renders the experience badge', () => {
    render(<About />)
    expect(screen.getByText('15+')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
  })

  it('renders the feature list', () => {
    render(<About />)
    expect(screen.getByText('Qualified and caring teachers')).toBeInTheDocument()
    expect(screen.getByText('Safe and stimulating environment')).toBeInTheDocument()
    expect(screen.getByText('Age-appropriate curriculum')).toBeInTheDocument()
    expect(screen.getByText('Regular parent communication')).toBeInTheDocument()
  })

  it('renders the Learn More link', () => {
    render(<About />)
    const links = screen.getAllByRole('link', { name: 'Learn More' })
    expect(links.length).toBeGreaterThan(0)
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText('Children learning in a classroom')).toBeInTheDocument()
  })
})
