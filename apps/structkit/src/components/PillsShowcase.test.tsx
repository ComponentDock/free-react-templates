import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { PillsShowcase } from './PillsShowcase'

describe('PillsShowcase', () => {
  it('renders the pills with the first one active', () => {
    render(<PillsShowcase />)

    const home = screen.getAllByRole('tab', { name: 'Home' })[0]!
    expect(home).toHaveAttribute('aria-selected', 'true')
    expect(screen.getAllByRole('tab', { name: 'Profile' })[0]).toHaveAttribute(
      'aria-selected',
      'false',
    )
    expect(screen.getAllByText(/Far far away, behind the word mountains/).length).toBeGreaterThan(0)
  })

  it('switches the active pill', async () => {
    const user = userEvent.setup()
    render(<PillsShowcase />)

    await user.click(screen.getAllByRole('tab', { name: 'Messages' })[0]!)
    expect(screen.getAllByRole('tab', { name: 'Messages' })[0]).toHaveAttribute(
      'aria-selected',
      'true',
    )
  })

  it('switches the tab panes', async () => {
    const user = userEvent.setup()
    render(<PillsShowcase />)

    expect(screen.getByRole('tabpanel')).toHaveTextContent('Here is information about home.')

    await user.click(screen.getAllByRole('tab', { name: 'Profile' })[1]!)
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Here is your profile.')

    await user.click(screen.getAllByRole('tab', { name: 'Messages' })[1]!)
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Here are your messages.')
  })
})
