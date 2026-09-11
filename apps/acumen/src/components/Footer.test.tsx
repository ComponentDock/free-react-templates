import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByText('Acumen')).toBeInTheDocument()
  })

  it('has Company link column', () => {
    render(<Footer />)
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
  })

  it('has Resources link column', () => {
    render(<Footer />)
    expect(screen.getByText('Resources')).toBeInTheDocument()
    expect(screen.getByText('Documentation')).toBeInTheDocument()
  })

  it('has Solutions link column', () => {
    render(<Footer />)
    expect(screen.getByText('Solutions')).toBeInTheDocument()
    expect(screen.getByText('Web Design')).toBeInTheDocument()
  })

  it('has email subscription input', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
  })

  it('subscribes successfully', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Thanks for subscribing!')).toBeInTheDocument()
  })

  it('has Component Dock credit link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('does not subscribe with invalid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'invalid')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.queryByText('Thanks for subscribing!')).not.toBeInTheDocument()
  })
})
