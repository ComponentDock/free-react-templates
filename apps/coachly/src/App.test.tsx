import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Coachly')).toBeInTheDocument()
    expect(screen.getByText('Professional Life Coaching')).toBeInTheDocument()
    expect(screen.getByText('Welcome to Coachly')).toBeInTheDocument()
    expect(screen.getByText('Our Training')).toBeInTheDocument()
    expect(screen.getByText('Meet Our Team')).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText('Our Blog Posts')).toBeInTheDocument()
    expect(screen.getByText('Reach Out to Us')).toBeInTheDocument()
    expect(screen.getByText('About Coachly')).toBeInTheDocument()
  })
})
