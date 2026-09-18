import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Find Your Dream Job')
  })

  it('renders search inputs', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Search keywords')).toBeDefined()
    expect(screen.getByLabelText('Location')).toBeDefined()
  })

  it('renders search button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /search/i })).toBeDefined()
  })

  it('prevents form submission', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const form = screen.getByLabelText('Search keywords').closest('form')!
    const submitSpy = vi.fn((e: Event) => e.preventDefault())
    form.addEventListener('submit', submitSpy)
    await user.click(screen.getByRole('button', { name: /search/i }))
    expect(submitSpy).toHaveBeenCalled()
  })

  it('renders category browse links', () => {
    render(<Hero />)
    expect(screen.getByText('Accounting')).toBeDefined()
    expect(screen.getByText('Healthcare')).toBeDefined()
    expect(screen.getByText('Technology')).toBeDefined()
  })
})
