import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows About Pumply, the Links list, and the Subscribe form', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'About Pumply' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Subscribe' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home-section')
    expect(screen.getByRole('link', { name: 'Meditation' })).toHaveAttribute(
      'href',
      '#schedule-section',
    )
    expect(screen.getByRole('link', { name: 'Gym' })).toHaveAttribute('href', '#classes-section')
    expect(screen.getByRole('link', { name: 'Aerobatics' })).toHaveAttribute(
      'href',
      '#services-section',
    )
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toHaveClass('bg-primary')
  })

  it('links the copyright bar to Component Dock', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/Copyright © \d{4} All rights reserved/)).toBeInTheDocument()
  })

  it('rejects an invalid email and shows the success message for a valid one', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'nope')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument()
    expect(screen.queryByText('Thanks for subscribing!')).not.toBeInTheDocument()
    await user.type(screen.getByLabelText('Email address'), '@example.com')
    expect(screen.queryByText('Enter a valid email address')).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
  })
})
