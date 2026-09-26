import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByText('Clydson')).toBeInTheDocument()
    expect(screen.getByText(/Creative/)).toBeInTheDocument()
    expect(screen.getByText('750')).toBeInTheDocument()
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('My Skills')).toBeInTheDocument()
    expect(screen.getByText('We do awesome services for our clients')).toBeInTheDocument()
    expect(screen.getByText('Have a project on your mind.')).toBeInTheDocument()
    expect(screen.getByText('Our Projects')).toBeInTheDocument()
    expect(screen.getByText('What client says about?')).toBeInTheDocument()
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
    expect(screen.getByText('Have a Project?')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
