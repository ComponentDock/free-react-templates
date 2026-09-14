import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Mechbot — Robotics Landing Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getAllByText(/Mechbot/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/Next-Gen Robotics/i)).toBeInTheDocument()
    expect(screen.getByText(/Our Products/i)).toBeInTheDocument()
    expect(screen.getByText(/Pioneering Accessible Robotics/i)).toBeInTheDocument()
    expect(screen.getByText(/Why Choose Mechbot/i)).toBeInTheDocument()
    expect(screen.getByText(/See Mechbot in Action/i)).toBeInTheDocument()
    expect(screen.getByText(/Latest from Mechbot/i)).toBeInTheDocument()
  })
})
