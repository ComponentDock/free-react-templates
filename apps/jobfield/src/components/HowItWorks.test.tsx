import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the heading and the two audience tabs', () => {
    render(<HowItWorks />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Your Path to Success' }),
    ).toBeInTheDocument()

    const seekers = screen.getByRole('button', { name: 'For Job Seekers' })
    const employers = screen.getByRole('button', { name: 'For Employers' })
    expect(seekers).toHaveAttribute('aria-pressed', 'true')
    expect(employers).toHaveAttribute('aria-pressed', 'false')
  })

  it('shows the job-seeker steps by default', () => {
    render(<HowItWorks />)

    for (const step of ['Create Your Profile', 'Discover Opportunities', 'Apply & Get Hired']) {
      expect(screen.getByRole('heading', { level: 3, name: step })).toBeInTheDocument()
    }
    expect(screen.getByText(/Build a standout profile/)).toBeInTheDocument()
    expect(screen.getByText('01')).toBeInTheDocument()
  })

  it('switches to the employer steps when the For Employers tab is clicked', async () => {
    const user = userEvent.setup()
    render(<HowItWorks />)

    await user.click(screen.getByRole('button', { name: 'For Employers' }))

    expect(screen.getByRole('button', { name: 'For Employers' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByRole('button', { name: 'For Job Seekers' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )

    for (const step of ['Post Your Opening', 'Review Candidates', 'Hire Top Talent']) {
      expect(screen.getByRole('heading', { level: 3, name: step })).toBeInTheDocument()
    }
    expect(screen.getByText(/Create compelling job listings/)).toBeInTheDocument()
    expect(screen.queryByRole('heading', { level: 3, name: 'Create Your Profile' })).toBeNull()
  })

  it('switches back to the job-seeker steps', async () => {
    const user = userEvent.setup()
    render(<HowItWorks />)

    await user.click(screen.getByRole('button', { name: 'For Employers' }))
    await user.click(screen.getByRole('button', { name: 'For Job Seekers' }))

    expect(
      screen.getByRole('heading', { level: 3, name: 'Create Your Profile' }),
    ).toBeInTheDocument()
  })
})
