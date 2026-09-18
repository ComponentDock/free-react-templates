import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /Job.*Launch/i })).toBeInTheDocument()
    expect(screen.getByText('Largest Job')).toBeInTheDocument()
    expect(screen.getByText('Recent Jobs')).toBeInTheDocument()
    expect(screen.getByText('Why JobLaunch')).toBeInTheDocument()
    expect(screen.getByText('Happy Employers')).toBeInTheDocument()
    expect(screen.getByText('Latest Blog')).toBeInTheDocument()
    expect(screen.getByText('Subscribe Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('JobLaunch — Job Portal Template')
  })
})
