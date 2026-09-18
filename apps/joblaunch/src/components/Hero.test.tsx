import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders headline', () => {
    render(<Hero />)
    expect(screen.getByText('Largest Job')).toBeInTheDocument()
    expect(screen.getByText('Site On The Net')).toBeInTheDocument()
  })

  it('renders Find A Job tab as active by default', () => {
    render(<Hero />)
    const jobTab = screen.getByRole('tab', { name: /Find A Job/i })
    expect(jobTab).toHaveAttribute('aria-selected', 'true')
  })

  it('shows job search form by default', () => {
    render(<Hero />)
    expect(screen.getByPlaceholderText('eg. Web Developer')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Category')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Location')).toBeInTheDocument()
  })

  it('switches to candidate tab', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('tab', { name: /Find A Candidate/i }))
    expect(screen.getByPlaceholderText('eg. Carl Smith')).toBeInTheDocument()
  })

  it('switches back to job tab from candidate', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('tab', { name: /Find A Candidate/i }))
    expect(screen.getByPlaceholderText('eg. Carl Smith')).toBeInTheDocument()
    await user.click(screen.getByRole('tab', { name: /Find A Job/i }))
    expect(screen.getByPlaceholderText('eg. Web Developer')).toBeInTheDocument()
  })

  it('has Search button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument()
  })
})
