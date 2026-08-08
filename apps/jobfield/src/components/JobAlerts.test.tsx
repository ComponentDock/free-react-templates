import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { JobAlerts } from './JobAlerts'

describe('JobAlerts', () => {
  it('renders the heading, sub-paragraph and microcopy', () => {
    render(<JobAlerts />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Never Miss an Opportunity' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Get new job matches delivered straight to your inbox/),
    ).toBeInTheDocument()
    expect(screen.getByText('Free forever. Unsubscribe anytime. No spam.')).toBeInTheDocument()
  })

  it('renders the email field and the Get Job Alerts button', () => {
    render(<JobAlerts />)

    expect(screen.getByRole('textbox', { name: 'Email address' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Get Job Alerts' })).toBeInTheDocument()
  })

  it('submits the form without navigating away', () => {
    render(<JobAlerts />)

    const form = screen.getByRole('form', { name: 'Job alerts' })
    fireEvent.submit(form)

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })
})
