import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { JobSearchBar } from './JobSearchBar'

describe('JobSearchBar', () => {
  it('renders both tab buttons', () => {
    render(<JobSearchBar />)
    expect(screen.getByRole('tab', { name: /Find a Job/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /Find a Candidate/i })).toBeInTheDocument()
  })

  it('shows job search form by default', () => {
    render(<JobSearchBar />)
    expect(screen.getByPlaceholderText(/Graphic, Web Developer/i)).toBeInTheDocument()
    expect(screen.getByText('Category')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Location')).toBeInTheDocument()
  })

  it('switches to candidate tab', async () => {
    const user = userEvent.setup()
    render(<JobSearchBar />)
    await user.click(screen.getByRole('tab', { name: /Find a Candidate/i }))
    expect(screen.getByPlaceholderText(/Adam Scott/i)).toBeInTheDocument()
  })

  it('switches back to job tab', async () => {
    const user = userEvent.setup()
    render(<JobSearchBar />)
    await user.click(screen.getByRole('tab', { name: /Find a Candidate/i }))
    await user.click(screen.getByRole('tab', { name: /Find a Job/i }))
    expect(screen.getByPlaceholderText(/Graphic, Web Developer/i)).toBeInTheDocument()
  })

  it('renders search buttons', () => {
    render(<JobSearchBar />)
    expect(screen.getByText('Search')).toBeInTheDocument()
  })

  it('renders browse keywords', () => {
    render(<JobSearchBar />)
    expect(screen.getByText('Designer')).toBeInTheDocument()
    expect(screen.getByText('Web Developer')).toBeInTheDocument()
  })
})
