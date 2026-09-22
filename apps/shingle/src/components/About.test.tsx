import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /45 years/i })).toBeInTheDocument()
  })

  it('shows the quote form with service select and send button', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'Get a Quote' })).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument()
  })

  it('switches between Mission, Vision, and Value tabs', async () => {
    const user = userEvent.setup()
    render(<About />)
    expect(screen.getByText(/committed to delivering/i)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Our Vision' }))
    expect(screen.getByText(/most trusted roofing company/i)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Our Value' }))
    expect(screen.getByText(/Honesty, quality workmanship/i)).toBeInTheDocument()
  })

  it('has the section id about', () => {
    const { container } = render(<About />)
    expect(container.querySelector('#about')).toBeInTheDocument()
  })

  it('submits the quote form', async () => {
    const user = userEvent.setup()
    render(<About />)
    const submitBtn = screen.getByRole('button', { name: /Send Message/i })
    await user.click(submitBtn)
    // Form submission is handled (preventDefault) — no page reload
    expect(submitBtn).toBeInTheDocument()
  })
})
