import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getAllByText('LEARNOVA').length).toBeGreaterThan(0)
    expect(screen.getByText('Learn From Doing')).toBeInTheDocument()
    expect(screen.getByText('Top Courses')).toBeInTheDocument()
    expect(screen.getByText(/Sign Up And Get a 7-day Free Trial/)).toBeInTheDocument()
    expect(screen.getByText(/I highly recommend/)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Learnova — Online Education Template')
  })
})
