import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByText(/we're real estate king/i)).toBeInTheDocument()
    expect(screen.getByText(/properties in various cities/i)).toBeInTheDocument()
    expect(screen.getByText(/find home in your city/i)).toBeInTheDocument()
    expect(screen.getByText(/feedback from our real clients/i)).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('has a skip to main content link', () => {
    render(<App />)
    expect(screen.getByText('Skip to main content')).toHaveAttribute('href', '#main-content')
  })
})
