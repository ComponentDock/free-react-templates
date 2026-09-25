import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByText('Welcome To Tastory')).toBeInTheDocument()
    expect(screen.getByText('Our Story')).toBeInTheDocument()
    expect(screen.getByText('Our Offers')).toBeInTheDocument()
    expect(screen.getByText('Delicious Menu')).toBeInTheDocument()
    // "News" and "Gallery" appear in nav + section heading
    expect(screen.getAllByText('News').length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText('Gallery').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
