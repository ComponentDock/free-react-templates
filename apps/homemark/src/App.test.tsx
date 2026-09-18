import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all sections in order', () => {
    render(<App />)
    // Navbar
    expect(screen.getAllByText('HOMESTEAD').length).toBeGreaterThanOrEqual(1)
    // Hero
    expect(screen.getByText('3 Modern homes for modern thinking people.')).toBeInTheDocument()
    // FeatureIcons
    expect(screen.getByText('Easy Buying')).toBeInTheDocument()
    // Intro
    expect(screen.getAllByText('Our Houses').length).toBeGreaterThanOrEqual(1)
    // Gallery
    expect(screen.getByText('INTERIOR')).toBeInTheDocument()
    // Location
    expect(screen.getByText('Location')).toBeInTheDocument()
    // Features
    expect(screen.getByText('ECO-FRIENDLY HOMES')).toBeInTheDocument()
    // CTA
    expect(
      screen.getByText('Ask our top consultants for a personalized offer today.'),
    ).toBeInTheDocument()
    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
