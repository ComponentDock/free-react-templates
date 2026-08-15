import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the about, links, and subscribe columns plus the Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'About Sweatly' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Subscribe' })).toBeInTheDocument()

    for (const label of ['Home', 'Classes', 'Schedule', 'Trainer']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(screen.getByText(/© 2026 Sweatly\. All rights reserved\./)).toBeInTheDocument()
  })

  it('subscribes with an email and shows a confirmation', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
  })
})
