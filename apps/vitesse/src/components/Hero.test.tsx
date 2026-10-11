import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the white display headline with the orange accent word and a dark overlay', () => {
    const { container } = render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Safe & Reliable')
    expect(heading).toHaveTextContent('Logistic')
    expect(heading).toHaveTextContent('Solutions!')
    expect(heading.querySelector('span')).toHaveClass('text-accent')
    expect(container.querySelector('.bg-header\\/60')).toBeInTheDocument()
  })

  it('uses seeded placeholder photography for every slide', () => {
    const { container } = render(<Hero />)
    const images = container.querySelectorAll('img')
    expect(images.length).toBeGreaterThanOrEqual(2)
    for (const image of images) {
      expect(image.getAttribute('src')).toContain('picsum.photos/seed/vitesse-hero-')
    }
  })

  it('rotates slides with the next and previous arrows, wrapping around', () => {
    const { container } = render(<Hero />)
    const activeSrc = () => container.querySelector('img.opacity-100')?.getAttribute('src') ?? ''

    expect(activeSrc()).toContain('vitesse-hero-1')
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(activeSrc()).toContain('vitesse-hero-2')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Freight')

    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(activeSrc()).toContain('vitesse-hero-1')

    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(activeSrc()).toContain('vitesse-hero-2')
  })

  it('renders the tracking form with input, submit button, and inquiry note', () => {
    render(<Hero />)
    expect(screen.getByPlaceholderText('Your Tracking ID')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Track & Trace' })).toBeInTheDocument()
    expect(screen.getByText('For order status inquiry')).toBeInTheDocument()
  })

  it('blocks an empty tracking submit with an alert', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'Track & Trace' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a tracking ID')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('acknowledges a submitted tracking ID with a local status and clears on empty resubmit', () => {
    render(<Hero />)
    const input = screen.getByPlaceholderText('Your Tracking ID')
    fireEvent.change(input, { target: { value: 'VTX-99120' } })
    fireEvent.click(screen.getByRole('button', { name: 'Track & Trace' }))
    expect(screen.getByRole('status')).toHaveTextContent('VTX-99120')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()

    fireEvent.change(input, { target: { value: '' } })
    fireEvent.click(screen.getByRole('button', { name: 'Track & Trace' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a tracking ID')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })
})
