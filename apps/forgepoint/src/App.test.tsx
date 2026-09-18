import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('ForgePoint').length).toBeGreaterThanOrEqual(1)
    expect(
      screen.getByRole('heading', { level: 1, name: /Industrial Solutions!/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('Automotive Manufacturing')).toBeInTheDocument()
    expect(screen.getByText('Heavy Industry Market')).toBeInTheDocument()
    expect(screen.getByText('Industry Analysis')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Safe Industrial Solutions/i }),
    ).toBeInTheDocument()
    expect(screen.getAllByText('Floride Chemicals Factory').length).toBeGreaterThanOrEqual(1)
    expect(
      screen.getByRole('heading', { level: 2, name: /Our Team Best Members/i }),
    ).toBeInTheDocument()
    expect(screen.getAllByText('Jessya Inn').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/David Droga/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { level: 2, name: /Want To Work/i })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('ForgePoint — Industrial Solutions Template')
  })
})
