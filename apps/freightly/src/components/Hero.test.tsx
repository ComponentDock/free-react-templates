import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, CTA button, tracking widget and trust badges', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: /Ship Anywhere/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Explore Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Track Your Shipment' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Track Package' })).toBeInTheDocument()
    expect(screen.getByText('Free tracking')).toBeInTheDocument()
    expect(screen.getByText('Insured shipments')).toBeInTheDocument()
    expect(screen.getByText('24/7 support')).toBeInTheDocument()
    expect(screen.getByText('In Transit')).toBeInTheDocument()
  })

  it('does not navigate when the tracking form is submitted empty', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Track Package' }))
    expect(screen.getByLabelText('Tracking number')).toHaveValue('')
  })
})
