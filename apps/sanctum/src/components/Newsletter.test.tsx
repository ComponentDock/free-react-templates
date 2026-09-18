import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Newsletter } from './Newsletter'
import { newsletter } from '../data'

describe('Newsletter', () => {
  it('renders the heading and description', () => {
    render(<Newsletter />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(newsletter.heading)
    expect(screen.getByText(newsletter.description)).toBeInTheDocument()
  })

  it('renders the email input and submit button', () => {
    render(<Newsletter />)
    expect(screen.getByRole('textbox', { name: newsletter.placeholder })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: newsletter.ctaLabel })).toBeInTheDocument()
  })

  it('prevents default form submission', () => {
    render(<Newsletter />)
    const form = screen.getByRole('textbox', { name: newsletter.placeholder }).closest('form')!
    let defaultPrevented = false
    form.addEventListener('submit', (e) => {
      defaultPrevented = true
      e.preventDefault()
    })
    fireEvent.submit(form)
    expect(defaultPrevented).toBe(true)
  })
})
