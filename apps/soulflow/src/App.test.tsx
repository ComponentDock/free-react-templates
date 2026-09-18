import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)

    expect(screen.getByText('Soulflow')).toBeInTheDocument()
    expect(screen.getAllByText('Welcome To Soulflow').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Hello there!')).toBeInTheDocument()
    expect(screen.getByText('Our Programs')).toBeInTheDocument()
    expect(screen.getByText('Watch Video')).toBeInTheDocument()
    expect(screen.getByText('Yoga Pricing')).toBeInTheDocument()
    expect(screen.getByText('Yoga Features')).toBeInTheDocument()
    expect(screen.getByText('Our Gallery')).toBeInTheDocument()
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument()
    expect(screen.getByText('What People Say')).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })
})
