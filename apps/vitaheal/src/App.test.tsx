import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(document.querySelector('.min-h-screen')).toBeInTheDocument()
  })

  it('has the correct page title', () => {
    render(<App />)
    expect(document.title).toBe('Vitaheal — Medical Template')
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText(/vitaheal/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Medical Services that you can trust/)).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Our Departments')).toBeInTheDocument()
    expect(screen.getByText('Faq & Stuff')).toBeInTheDocument()
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })
})
