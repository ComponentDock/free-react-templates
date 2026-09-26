import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByText('Donald McKinney')).toBeInTheDocument()
    expect(screen.getByText('About Myself')).toBeInTheDocument()
    expect(screen.getByText('My Experiences')).toBeInTheDocument()
    expect(screen.getByText('Offerings to My Clients')).toBeInTheDocument()
    expect(screen.getByText('Our Latest Featured Projects')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Testimonials', level: 2 })).toBeInTheDocument()
    expect(screen.getByText('About Me')).toBeInTheDocument()
  })
})
