import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the subtitle, heading, and the first testimonial', () => {
    render(<Testimonials />)

    expect(screen.getByText('What They Say')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Testimonials' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Adam Aderson' })).toBeInTheDocument()
    expect(screen.getByText(/difficult site and a big idea/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Adam Aderson/i })).toBeInTheDocument()
  })

  it('advances with Next and wraps around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Lukas Devlin' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Kayla Bryant' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Adam Aderson' })).toBeInTheDocument()
  })

  it('goes back with Prev and wraps around', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Prev' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Kayla Bryant' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Prev' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Lukas Devlin' })).toBeInTheDocument()
  })
})
