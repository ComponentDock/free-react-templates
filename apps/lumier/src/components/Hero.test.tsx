import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the welcome heading', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Hero />)
    expect(screen.getByText(/Capturing moments that last forever/)).toBeInTheDocument()
  })

  it('renders the Contact Me button', () => {
    render(<Hero />)
    expect(screen.getByText('Contact Me')).toBeInTheDocument()
  })

  it('smoothly scrolls to contact section on button click', async () => {
    const user = userEvent.setup()
    const scrollIntoView = vi.fn()
    HTMLDivElement.prototype.scrollIntoView = scrollIntoView

    render(<Hero />)

    const mockEl = document.createElement('div')
    mockEl.id = 'section-contact'
    vi.spyOn(document, 'getElementById').mockReturnValue(mockEl)

    await user.click(screen.getByText('Contact Me'))
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })
})
