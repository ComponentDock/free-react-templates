import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('BrightPath')).toBeInTheDocument()
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /we rank the best/i })).toBeInTheDocument()
    expect(screen.getByText('New Classes')).toBeInTheDocument()
    expect(screen.getByText('Over 2500 Courses from 5 Platforms')).toBeInTheDocument()
    expect(screen.getByText('Popular Courses')).toBeInTheDocument()
    expect(screen.getByText('Facts that Make us Unique')).toBeInTheDocument()
    expect(screen.getByText('Register Now')).toBeInTheDocument()
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
  })
})
