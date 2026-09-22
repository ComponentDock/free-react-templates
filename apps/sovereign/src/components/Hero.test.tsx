import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and subheading', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome to Sovereign Hotel')).toBeInTheDocument()
    expect(
      screen.getByText('Experience luxury and comfort in the heart of the city'),
    ).toBeInTheDocument()
  })

  it('renders booking form fields', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Check In')).toBeInTheDocument()
    expect(screen.getByLabelText('Check Out')).toBeInTheDocument()
    expect(screen.getByLabelText('Room Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Guests')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Check Availability' })).toBeInTheDocument()
  })

  it('has a background image', () => {
    render(<Hero />)
    const section = document.querySelector('section')
    expect(section?.getAttribute('style')).toContain('picsum.photos')
  })

  it('prevents form submission', async () => {
    const user = userEvent.setup()
    const preventDefault = vi.fn()
    render(<Hero />)

    const form = document.querySelector('form')!
    form.addEventListener('submit', (e) => {
      e.preventDefault = preventDefault
    })

    await user.click(screen.getByRole('button', { name: 'Check Availability' }))
    expect(preventDefault).toHaveBeenCalled()
  })
})
