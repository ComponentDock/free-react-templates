import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getAllByText('LocalFinder').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Discover The Best Services Near You')).toBeInTheDocument()
    expect(screen.getByText('Most Popular Categories')).toBeInTheDocument()
    expect(screen.getByText('The Most Searched Services')).toBeInTheDocument()
    expect(screen.getByText('Featured Locations')).toBeInTheDocument()
    expect(screen.getByText('What Our Users Say')).toBeInTheDocument()
    expect(screen.getByText('Latest News')).toBeInTheDocument()
    expect(screen.getByText('Subscribe to Our Newsletter')).toBeInTheDocument()
  })

  it('links footer to Component Dock', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
