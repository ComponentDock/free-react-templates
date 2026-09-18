import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Counseling For Your Better Life',
    )
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Plea').length).toBeGreaterThan(0)
    expect(screen.getByText('100% Confidential')).toBeInTheDocument()
    expect(screen.getByText('Make Schedule')).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Pricing Plans')).toBeInTheDocument()
    expect(screen.getByText('Make an Appointment')).toBeInTheDocument()
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Plea — Counseling Template')
  })
})
