import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { WizardCard } from './WizardCard'

describe('WizardCard', () => {
  it('renders the Registration heading', () => {
    render(<WizardCard />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Registration')
  })

  it('starts on step 1 with the first subtitle', () => {
    render(<WizardCard />)
    expect(screen.getByText('Please fill with your details')).toBeInTheDocument()
  })

  it('navigates forward and backward', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    await user.click(screen.getByRole('button', { name: /next step/i }))
    expect(screen.getByText('Please fill with additional info')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /previous step/i }))
    expect(screen.getByText('Please fill with your details')).toBeInTheDocument()
  })

  it('goes to step 3 and shows Submit', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    await user.click(screen.getByRole('button', { name: /next step/i }))
    await user.click(screen.getByRole('button', { name: /next step/i }))
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('navigates via dot click to step 3', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    const tabs = screen.getAllByRole('tab')
    const thirdTab = tabs[2]
    if (thirdTab) {
      await user.click(thirdTab)
    }
    expect(screen.getByText('Send an optional message')).toBeInTheDocument()
  })

  it('navigates via dot click to step 2', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    const tabs = screen.getAllByRole('tab')
    const secondTab = tabs[1]
    if (secondTab) {
      await user.click(secondTab)
    }
    expect(screen.getByText('Please fill with additional info')).toBeInTheDocument()
  })

  it('navigates to step 3 then back to step 1 via dot', async () => {
    const user = userEvent.setup()
    render(<WizardCard />)
    const tabs = screen.getAllByRole('tab')
    // Go to step 3
    const thirdTab = tabs[2]
    if (thirdTab) {
      await user.click(thirdTab)
    }
    expect(screen.getByText('Send an optional message')).toBeInTheDocument()
    // Go back to step 1
    const firstTab = tabs[0]
    if (firstTab) {
      await user.click(firstTab)
    }
    expect(screen.getByText('Please fill with your details')).toBeInTheDocument()
  })
})
