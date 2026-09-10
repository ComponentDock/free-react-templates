import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('JobQuest')).toBeInTheDocument()
    expect(screen.getByText('A Powerful Career Website Template')).toBeInTheDocument()
    expect(screen.getByText('Careers Statistics')).toBeInTheDocument()
    expect(screen.getByText('109,234 Job Listed')).toBeInTheDocument()
    expect(screen.getByText('Our Candidates Work In Company')).toBeInTheDocument()
    expect(screen.getByText('Looking For A Job?')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
