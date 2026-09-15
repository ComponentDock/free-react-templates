import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByText('GiveAid')).toBeInTheDocument()
    expect(screen.getByText('Needs a Caring Parents')).toBeInTheDocument()
    expect(screen.getAllByText('Waiting Children').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Featured Stories')).toBeInTheDocument()
    expect(screen.getByText('Get News & Updates')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('GiveAid — Charity & Adoption Template')
  })
})
