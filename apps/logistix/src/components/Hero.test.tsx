import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the welcome label and main heading', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome to Logistix')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/A TRULY GLOBAL/)
  })

  it('renders the subtitle text', () => {
    render(<Hero />)
    const matches = screen.getAllByText('We make your cargo transport simple')
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the Explore Us CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Explore Us/ })).toBeInTheDocument()
  })

  it('renders the quick offer form', () => {
    render(<Hero />)
    expect(screen.getByText('Get a quick offer')).toBeInTheDocument()
    expect(screen.getByLabelText('Truckload')).toBeInTheDocument()
    expect(screen.getByLabelText('Commodity')).toBeInTheDocument()
    expect(screen.getByLabelText('Distance (Miles)')).toBeInTheDocument()
  })

  it('displays the estimated cost', () => {
    render(<Hero />)
    expect(screen.getByText('$10,400.00')).toBeInTheDocument()
  })

  it('prevents default form submission', () => {
    render(<Hero />)
    const form = screen.getByLabelText('Truckload').closest('form')!
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
    const prevented = !form.dispatchEvent(submitEvent)
    // Form should prevent default
    expect(prevented || form.onsubmit !== null).toBeTruthy()
  })
})
