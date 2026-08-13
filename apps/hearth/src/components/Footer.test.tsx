import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the four widget headings and the open hours list', () => {
    const { container } = render(<Footer />)

    for (const heading of ['Hearth', 'Open Hours', 'Newsletter', 'Instagram']) {
      expect(screen.getByRole('heading', { level: 2, name: heading })).toBeInTheDocument()
    }
    for (const day of [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ]) {
      expect(screen.getByText(day)).toBeInTheDocument()
    }
    expect(screen.getAllByText('9:00 - 24:00')).toHaveLength(4)
    expect(screen.getAllByText('9:00 - 02:00')).toHaveLength(2)
    expect(screen.getByText('Closed')).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(6)
  })

  it('shows the four social icon links', () => {
    render(<Footer />)

    for (const label of ['Facebook', 'Twitter', 'Google', 'Instagram']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('validates the newsletter email and confirms a valid subscription', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument()

    await user.type(screen.getByRole('textbox', { name: 'Email address' }), 'diner@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText('Thanks for subscribing!')).toBeInTheDocument()
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
  })

  it('clears the newsletter error while typing', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument()

    await user.type(screen.getByRole('textbox', { name: 'Email address' }), 'a')
    expect(screen.queryByText('Enter a valid email address')).not.toBeInTheDocument()
  })

  it('links the copyright bar to Component Dock', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'More templates at Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
