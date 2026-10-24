import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page in reference order', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByText('Alms')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Every Gift Grows Into Hope',
    )
    expect(screen.getByRole('heading', { name: 'Who Are We?' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest Fundraisers' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest Donations' })).toBeInTheDocument()
    expect(screen.getByText('Success Stories')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest News' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Be A Volunteer Today', level: 2 }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toBeInTheDocument()
  })

  it('sets the page title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Alms — Charity & Fundraising Template')
  })
})
