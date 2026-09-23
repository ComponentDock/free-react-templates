import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Kinetic').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText(/best place on web/i)).toBeInTheDocument()
    expect(screen.getByText('Our Working Process')).toBeInTheDocument()
    expect(screen.getByText('Our Exclusive Features')).toBeInTheDocument()
    expect(screen.getByText('Remarkable Works')).toBeInTheDocument()
    expect(screen.getByText(/from the part of beginning/i)).toBeInTheDocument()
    expect(screen.getByText(/subscribe for our newsletter/i)).toBeInTheDocument()
    expect(screen.getByText('Keep in Touch')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Kinetic — Creative Agency Template')
  })
})
