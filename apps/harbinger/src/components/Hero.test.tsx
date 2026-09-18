import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Under Construction')
  })

  it('renders descriptive paragraph', () => {
    render(<Hero />)
    expect(
      screen.getByText(/website is currently undergoing scheduled maintenance/i),
    ).toBeInTheDocument()
  })

  it('renders the Harbinger logo text', () => {
    render(<Hero />)
    expect(screen.getByText('Harbinger')).toBeInTheDocument()
  })

  it('renders email form before submission', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /notify us/i })).toBeInTheDocument()
  })

  it('shows confirmation after email submission', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /notify us/i }))
    expect(screen.getByText(/thank you.*we will notify you/i)).toBeInTheDocument()
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Google')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Pinterest')).toBeInTheDocument()
  })

  it('renders sign-up prompt text', () => {
    render(<Hero />)
    expect(screen.getByText(/sign up now to get early notification/i)).toBeInTheDocument()
  })

  it('renders stay in touch label', () => {
    render(<Hero />)
    expect(screen.getByText('Stay in touch :')).toBeInTheDocument()
  })
})
