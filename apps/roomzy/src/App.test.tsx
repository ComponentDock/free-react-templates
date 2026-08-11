import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Roomzy — Hotel Booking Template')
  })

  it('renders the booking form inside the main landmark', () => {
    const { container } = render(<App />)

    const main = screen.getByRole('main')
    const section = main.querySelector('#booking') as HTMLElement
    expect(section).not.toBeNull()
    expect(within(main).getByRole('button', { name: 'Book Now' })).toBeInTheDocument()

    const form = container.querySelector('form') as HTMLFormElement
    expect(form).not.toBeNull()
    expect(section.contains(form)).toBe(true)
  })
})
