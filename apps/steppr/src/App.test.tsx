import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the wizard form with step 1 by default', () => {
    render(<App />)

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Form steps' })).toBeInTheDocument()

    expect(screen.getByLabelText('Username*')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address*')).toBeInTheDocument()
    expect(screen.getByLabelText('Password*')).toBeInTheDocument()
    expect(screen.getByLabelText('Confirm Password*')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('has a background image on the main area', () => {
    render(<App />)

    const main = screen.getByRole('main')
    expect(main.style.backgroundImage).toContain('picsum.photos/seed/steppr-bg')
  })

  it('navigates from step 1 to step 2 when next is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Next step' }))

    expect(screen.getByLabelText('Card Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Card Number')).toBeInTheDocument()
    expect(screen.queryByLabelText('Username*')).not.toBeInTheDocument()
  })

  it('navigates from step 2 back to step 1', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Next step' }))
    await user.click(screen.getByRole('button', { name: '← Previous' }))

    expect(screen.getByLabelText('Username*')).toBeInTheDocument()
    expect(screen.queryByLabelText('Card Type')).not.toBeInTheDocument()
  })

  it('navigates from step 2 to step 3', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Next step' }))
    await user.click(screen.getByRole('button', { name: 'Next step' }))

    expect(screen.getByRole('heading', { name: 'Confirm Details' })).toBeInTheDocument()
    expect(screen.getByText('Username:')).toBeInTheDocument()
  })

  it('navigates from step 3 back to step 2', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Next step' }))
    await user.click(screen.getByRole('button', { name: 'Next step' }))
    await user.click(screen.getByRole('button', { name: '← Previous' }))

    expect(screen.getByLabelText('Card Type')).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Confirm Details' })).not.toBeInTheDocument()
  })

  it('completes the full wizard flow with data', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Step 1: Account Info
    await user.type(screen.getByLabelText('Username*'), 'johndoe')
    await user.type(screen.getByLabelText('Email Address*'), 'john@example.com')
    await user.type(screen.getByLabelText('Password*'), 'secret123')
    await user.type(screen.getByLabelText('Confirm Password*'), 'secret123')
    await user.click(screen.getByRole('button', { name: 'Next step' }))

    // Step 2: Payment Info
    await user.selectOptions(screen.getByLabelText('Card Type'), 'Business Credit Cards')
    await user.type(screen.getByLabelText('Card Number'), '4890506250081234')
    await user.type(screen.getByLabelText('CVC'), '123')
    await user.selectOptions(screen.getByLabelText('Expiry Month'), 'January')
    await user.selectOptions(screen.getByLabelText('Expiry Year'), '2026')
    await user.click(screen.getByRole('button', { name: 'Next step' }))

    // Step 3: Confirmation
    expect(screen.getByText('johndoe')).toBeInTheDocument()
    expect(screen.getByText('john@example.com')).toBeInTheDocument()
    expect(screen.getByText('Business Credit Cards')).toBeInTheDocument()
    expect(screen.getByText('4890506250081234')).toBeInTheDocument()
    expect(screen.getByText('123')).toBeInTheDocument()
    expect(screen.getByText('January')).toBeInTheDocument()
    expect(screen.getByText('2026')).toBeInTheDocument()
  })
})
