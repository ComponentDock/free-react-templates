import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the boxed wordmark, subtitle and designer credit', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain('STRUCTKIT')
    expect(
      screen.getByText('Free UI kit built on the Structkit design system.'),
    ).toBeInTheDocument()
    expect(screen.getByText(/Designed by:/)).toBeInTheDocument()
    expect(screen.getByText('Ivy Marsh')).toBeInTheDocument()
  })

  it('renders the red circular scroll-down link into the elements band', () => {
    render(<Hero />)

    const scroll = screen.getByRole('link', { name: 'Scroll down to the elements' })
    expect(scroll).toHaveAttribute('href', '#buttons')
    expect(scroll).toHaveClass('rounded-full', 'bg-danger')
  })

  it('paints the hero photo under the red gradient wash', () => {
    render(<Hero />)

    const band = document.getElementById('home')
    expect(band).not.toBeNull()
    expect(band?.getAttribute('style')).toContain('structkit-hero')
    expect(screen.getByRole('heading', { level: 1 }).parentElement?.parentElement).not.toBeNull()
  })
})
