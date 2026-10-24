import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { HoursNewsletter } from './HoursNewsletter'
import { hours, newsletterSuccess } from '../data'

describe('HoursNewsletter', () => {
  it('renders the seven opening-hour rows', () => {
    render(<HoursNewsletter />)
    expect(screen.getByRole('heading', { level: 2, name: 'Working Hours' })).toBeInTheDocument()
    for (const row of hours) {
      expect(screen.getByText(row.day)).toBeInTheDocument()
    }
    expect(screen.getAllByText('Closed')).toHaveLength(1)
    expect(screen.getAllByRole('listitem')).toHaveLength(hours.length)
  })

  it('reports both fields when the form is submitted empty', async () => {
    const user = userEvent.setup()
    render(<HoursNewsletter />)
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Please enter your name')).toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
    expect(screen.queryByText(newsletterSuccess)).not.toBeInTheDocument()
  })

  it('reports only the email when the name is filled but the address is invalid', async () => {
    const user = userEvent.setup()
    render(<HoursNewsletter />)
    await user.type(screen.getByLabelText('Name'), 'Ada')
    await user.type(screen.getByLabelText('Email'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.queryByText('Please enter your name')).not.toBeInTheDocument()
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.queryByText(newsletterSuccess)).not.toBeInTheDocument()
  })

  it('confirms the subscription once both fields are valid', async () => {
    const user = userEvent.setup()
    render(<HoursNewsletter />)
    await user.type(screen.getByLabelText('Name'), 'Ada Lovelace')
    await user.type(screen.getByLabelText('Email'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent(newsletterSuccess)
    expect(screen.queryByText('Please enter a valid email address')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toHaveAttribute('aria-invalid', 'false')
  })
})
