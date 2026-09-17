import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, paragraphs, and Learn More button', () => {
    render(<About />)

    expect(screen.getByText('Welcome To Our Best Fitness Club')).toBeInTheDocument()
    expect(screen.getByText(/Our gym is more than just a place to work out/)).toBeInTheDocument()
    expect(screen.getByText(/Whether you.*re a beginner/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toBeInTheDocument()
  })

  it('links Learn More to the schedule section', () => {
    render(<About />)

    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#schedule')
  })

  it('renders the about image', () => {
    render(<About />)

    const img = screen.getByRole('img', { name: /fitness club interior/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/bodyforge-about/600/500')
  })
})
