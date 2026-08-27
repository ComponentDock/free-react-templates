import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page title', () => {
    render(<App />)
    expect(document.title).toBe('Stride — Fitness & Gym Landing Page')
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByText('We Believe Little Things Matter')).toBeInTheDocument()
    expect(screen.getAllByText('Hours').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Stay Healthy')).toBeInTheDocument()
    expect(screen.getByText('Get The Result You Want')).toBeInTheDocument()
    expect(screen.getByText('Every Step Counts')).toBeInTheDocument()
    expect(screen.getByText('Your Fitness Partner Where Ever You Are')).toBeInTheDocument()
    expect(screen.getByText('Fitness Class')).toBeInTheDocument()
    expect(screen.getAllByText('Schedule').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Our Trainers')).toBeInTheDocument()
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    expect(screen.getByText('About Stride')).toBeInTheDocument()
  })
})
