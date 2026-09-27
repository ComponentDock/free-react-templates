import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders the section heading and all FAQ items', () => {
    render(<FAQ />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Frequently Asked Questions' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /How do I search/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Can I schedule/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /What fees are involved/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Do you offer/ })).toBeInTheDocument()
  })

  it('shows the first answer by default and toggles on click', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    expect(screen.getByText(/Use the search bar on our homepage/)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /Can I schedule/ }))
    expect(screen.getByText(/Simply click on any property listing/)).toBeInTheDocument()
    expect(screen.queryByText(/Use the search bar on our homepage/)).not.toBeInTheDocument()
  })

  it('collapses an open item when clicked again', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    // First item is open by default
    expect(screen.getByText(/Use the search bar on our homepage/)).toBeInTheDocument()

    // Click first item to collapse
    await user.click(screen.getByRole('button', { name: /How do I search/ }))
    expect(screen.queryByText(/Use the search bar on our homepage/)).not.toBeInTheDocument()
  })
})
