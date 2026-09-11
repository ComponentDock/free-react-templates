import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'Helm' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText('What We do')).toBeInTheDocument()
    expect(screen.getByText('Our Features')).toBeInTheDocument()
    expect(screen.getByText('Design for the future')).toBeInTheDocument()
    expect(screen.getByText('Mike Dorney')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Helm — Technology Landing Template')
  })
})
