import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Learnly').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('Learnly University')).toBeInTheDocument()
    expect(screen.getByText('Why Learnly Works')).toBeInTheDocument()
    expect(screen.getByText('Popular Courses')).toBeInTheDocument()
    expect(screen.getByText('About Our University')).toBeInTheDocument()
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText('Our Philosophy')).toBeInTheDocument()
    expect(screen.getByText('News & Updates')).toBeInTheDocument()
    expect(screen.getByText('Subscribe to us!')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
