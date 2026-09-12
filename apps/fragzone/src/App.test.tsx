import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Fragzone').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('The Best Games Out There')
    expect(screen.getByText('Latest News')).toBeInTheDocument()
    expect(screen.getByText('Recent Games')).toBeInTheDocument()
    expect(screen.getByText('Tournaments')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Recent Reviews' })).toBeInTheDocument()
  })

  it('renders Component Dock footer link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
