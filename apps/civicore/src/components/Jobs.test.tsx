import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Jobs, type Job } from './Jobs'

describe('Jobs', () => {
  it('renders the section heading', () => {
    render(<Jobs />)
    expect(screen.getByRole('heading', { name: /browse recent jobs/i })).toBeInTheDocument()
  })

  it('renders all four tabs', () => {
    render(<Jobs />)
    expect(screen.getByRole('tab', { name: /recent/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /full time/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /part time/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /intern/i })).toBeInTheDocument()
  })

  it('defaults to Recent tab and shows job title', () => {
    render(<Jobs />)
    expect(screen.getByRole('tab', { name: /recent/i })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Senior UX Designer')).toBeInTheDocument()
  })

  it('switches tabs on click', async () => {
    const user = userEvent.setup()
    render(<Jobs />)
    await user.click(screen.getByRole('tab', { name: /full time/i }))
    expect(screen.getByRole('tab', { name: /full time/i })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument()
  })

  it('shows Apply Now button', () => {
    render(<Jobs />)
    expect(screen.getByRole('button', { name: /apply now/i })).toBeInTheDocument()
  })

  it('shows job details with icons', () => {
    render(<Jobs />)
    expect(screen.getByText(/new york, ny/i)).toBeInTheDocument()
    expect(screen.getByText(/design & creative/i)).toBeInTheDocument()
    expect(screen.getByText(/deadline/i)).toBeInTheDocument()
  })

  it('uses fallback badge color for unknown job type', () => {
    const customJobs: Record<string, Job> = {
      Recent: {
        title: 'Test Job',
        location: 'Test',
        field: 'Test',
        deadline: 'Test',
        type: 'UnknownType',
      },
      'Full Time': {
        title: 'Test',
        location: 'Test',
        field: 'Test',
        deadline: 'Test',
        type: 'Full Time',
      },
      'Part Time': {
        title: 'Test',
        location: 'Test',
        field: 'Test',
        deadline: 'Test',
        type: 'Part Time',
      },
      Intern: { title: 'Test', location: 'Test', field: 'Test', deadline: 'Test', type: 'Intern' },
    }
    render(<Jobs initialJobs={customJobs as never} />)
    const badge = screen.getByText('UnknownType')
    expect(badge.className).toContain('bg-brand')
  })
})
