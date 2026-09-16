import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  const targetDate = new Date('2030-01-01T00:00:00')

  it('renders the main heading', () => {
    render(<Hero targetDate={targetDate} />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent("We're Coming Soon")
  })

  it('renders descriptive paragraph', () => {
    render(<Hero targetDate={targetDate} />)
    expect(screen.getByText(/website is currently under construction/i)).toBeInTheDocument()
  })

  it('renders the Novus logo text', () => {
    render(<Hero targetDate={targetDate} />)
    expect(screen.getByText('Novus')).toBeInTheDocument()
  })

  it('renders countdown timer', () => {
    render(<Hero targetDate={targetDate} />)
    expect(screen.getByRole('timer')).toBeInTheDocument()
  })

  it('renders email form before submission', () => {
    render(<Hero targetDate={targetDate} />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('shows confirmation after email submission', async () => {
    const user = userEvent.setup()
    render(<Hero targetDate={targetDate} />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Hero targetDate={targetDate} />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
  })

  it('renders sign-up prompt text', () => {
    render(<Hero targetDate={targetDate} />)
    expect(screen.getByText(/sign up to get notified/i)).toBeInTheDocument()
  })
})
