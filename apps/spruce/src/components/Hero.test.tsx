import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline "Build your website"', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Build your website/)
  })

  it('renders the subtitle text', () => {
    render(<Hero />)
    expect(
      screen.getByText(/Combine sections from Spruce's vast component library/),
    ).toBeInTheDocument()
  })

  it('renders an email input and submit button', () => {
    render(<Hero />)
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Get Free Quote' })).toBeInTheDocument()
  })

  it('form submission prevents default', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const form = screen.getByPlaceholderText('Enter your email').closest('form')!
    const submitHandler = vi.fn((e: Event) => e.preventDefault())
    form.addEventListener('submit', submitHandler)

    await user.click(screen.getByRole('button', { name: 'Get Free Quote' }))
    expect(submitHandler).toHaveBeenCalled()
  })

  it('renders the hero image', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: 'Business hero illustration' })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/spruce-hero/600/500')
  })
})
