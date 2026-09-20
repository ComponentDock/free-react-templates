import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Jamboree')).toBeDefined()
    expect(screen.getByText(/our next event starts in/i)).toBeDefined()
    expect(screen.getByText('Core Functionalities')).toBeDefined()
    expect(screen.getByText('Our Speakers')).toBeDefined()
    expect(screen.getByText('Event Calendar')).toBeDefined()
    expect(screen.getByText('Upcoming Events')).toBeDefined()
    expect(screen.getByText('Component Dock')).toBeDefined()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Jamboree — Conference Event Template')
  })
})
