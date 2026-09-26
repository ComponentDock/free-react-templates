import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Reveal').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { level: 2, name: 'Portfolio' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'About Me' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'My Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'My Skills' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'My Happy Clients' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'My Journal' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Get In Touch' })).toBeInTheDocument()
  })
})
