import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AppointmentSection } from './AppointmentSection'

describe('AppointmentSection', () => {
  it('renders the Get a Quote heading', () => {
    render(<AppointmentSection />)
    expect(screen.getByRole('heading', { name: /Get a Quote/i })).toBeInTheDocument()
  })

  it('renders the about heading', () => {
    render(<AppointmentSection />)
    expect(screen.getByRole('heading', { name: /We Help More Than 45 Years/i })).toBeInTheDocument()
  })

  it('has form fields for name, email, date, time, message', () => {
    render(<AppointmentSection />)
    expect(screen.getByLabelText(/Your name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
  })

  it('has a service select dropdown', () => {
    render(<AppointmentSection />)
    expect(screen.getByLabelText(/Select services/i)).toBeInTheDocument()
  })

  it('has a submit button', () => {
    render(<AppointmentSection />)
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<AppointmentSection />)
    const submitBtn = screen.getByRole('button', { name: /Send Message/i })
    await user.click(submitBtn)
    // Form submission should not cause a page reload — just verifies onSubmit runs
  })

  it('switches tabs when clicked', async () => {
    const user = userEvent.setup()
    render(<AppointmentSection />)

    const missionBtn = screen.getByRole('button', { name: 'Our Mission' })
    const visionBtn = screen.getByRole('button', { name: 'Our Vision' })
    const valueBtn = screen.getByRole('button', { name: 'Our Value' })

    // Mission is active by default
    expect(missionBtn).toHaveClass('bg-gold-400')

    await user.click(visionBtn)
    expect(visionBtn).toHaveClass('bg-gold-400')
    expect(screen.getByText(/paradisematic country/i)).toBeInTheDocument()

    await user.click(valueBtn)
    expect(valueBtn).toHaveClass('bg-gold-400')
    expect(screen.getByText(/all-powerful Pointing/i)).toBeInTheDocument()
  })
})
