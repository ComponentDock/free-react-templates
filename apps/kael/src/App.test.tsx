import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all sections in order', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByText('I am Kael')).toBeInTheDocument()
    expect(screen.getByText(/Introduce About/i)).toBeInTheDocument()
    expect(screen.getByText('Service Offers')).toBeInTheDocument()
    expect(screen.getByText(/Quality Work/)).toBeInTheDocument()
    expect(screen.getByText('Client Say About Me')).toBeInTheDocument()
    expect(screen.getByText('Get Update From Anywhere')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Kael — Portfolio Template')
  })
})
