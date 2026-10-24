import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getAllByText('Justlaw').length).toBeGreaterThan(0)
    expect(screen.getByText(/we will fight/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /legal practice area/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /about just law/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /free consultation/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /recent case studies/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /words from clients/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /team members/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /get your answer/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })
})
