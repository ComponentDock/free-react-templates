import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RecentJobs } from './RecentJobs'

describe('RecentJobs', () => {
  it('renders heading', () => {
    render(<RecentJobs />)
    expect(screen.getByText('Recent Jobs')).toBeInTheDocument()
  })

  it('renders Post a Job button', () => {
    render(<RecentJobs />)
    expect(screen.getByText('+ Post a Job')).toBeInTheDocument()
  })

  it('renders 9 job items', () => {
    render(<RecentJobs />)
    expect(screen.getByText('Frontend Development')).toBeInTheDocument()
    expect(screen.getByText('Software Engineering')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Designer')).toBeInTheDocument()
    expect(screen.getByText('Data Science')).toBeInTheDocument()
    expect(screen.getByText('Backend Development')).toBeInTheDocument()
    expect(screen.getByText('DevOps Engineer')).toBeInTheDocument()
    expect(screen.getByText('Mobile Development')).toBeInTheDocument()
    expect(screen.getByText('Project Manager')).toBeInTheDocument()
    expect(screen.getByText('Cloud Architect')).toBeInTheDocument()
  })

  it('renders job type badges', () => {
    render(<RecentJobs />)
    expect(screen.getAllByText('Part Time').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Full Time').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Freelance').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Internship')).toBeInTheDocument()
    expect(screen.getByText('Temporary')).toBeInTheDocument()
  })

  it('renders Apply Job buttons', () => {
    render(<RecentJobs />)
    const applyButtons = screen.getAllByText('Apply Job')
    expect(applyButtons.length).toBe(9)
  })

  it('renders favorite buttons', () => {
    render(<RecentJobs />)
    const favButtons = screen.getAllByLabelText(/Favorite/)
    expect(favButtons.length).toBe(9)
  })

  it('renders pagination', async () => {
    const user = userEvent.setup()
    render(<RecentJobs />)
    const prevBtn = screen.getByLabelText('Previous page')
    const nextBtn = screen.getByLabelText('Next page')
    expect(prevBtn).toBeInTheDocument()
    expect(nextBtn).toBeInTheDocument()
    await user.click(nextBtn)
    expect(nextBtn).toBeInTheDocument()
  })

  it('renders page numbers', () => {
    render(<RecentJobs />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
  })
})
