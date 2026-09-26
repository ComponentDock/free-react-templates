import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the founder name', () => {
    render(<About />)
    expect(screen.getAllByText(/John Carter/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders the welcome heading', () => {
    render(<About />)
    expect(screen.getByText(/Welcome to my personal website/)).toBeInTheDocument()
  })

  it('renders team member names', () => {
    render(<About />)
    expect(screen.getAllByText('John Carter').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Jessica Williams')).toBeInTheDocument()
    expect(screen.getByText('Mike Smith')).toBeInTheDocument()
  })

  it('renders team member roles', () => {
    render(<About />)
    expect(screen.getByText('Photographer')).toBeInTheDocument()
    expect(screen.getByText('Creative Director')).toBeInTheDocument()
    expect(screen.getByText('Designer')).toBeInTheDocument()
  })

  it('renders team member images', () => {
    render(<About />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
    expect(images[0]).toHaveAttribute('src', 'https://picsum.photos/seed/shotlab-team-1/200/200')
  })
})
