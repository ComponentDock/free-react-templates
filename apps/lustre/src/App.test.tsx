import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('composes the navbar, sections, footer, and title with correct landmarks', () => {
    render(<App />)

    expect(document.title).toBe('Lustre — Hair Salon Template')

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 1, name: 'The hair that you dream' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Testimonials' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Get in touch' })).toBeInTheDocument()

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens and closes the appointment panel from the navbar button', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Book an Appointment' }))
    expect(screen.getByRole('dialog', { name: 'Book an appointment' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close appointment panel' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
