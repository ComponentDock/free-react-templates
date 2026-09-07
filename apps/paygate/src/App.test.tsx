import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the wizard heading', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Create Payment Account' })).toBeInTheDocument()
  })

  it('shows step 1 personal information form by default', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'Personal Information' })).toBeInTheDocument()
  })

  it('renders the step indicator with 3 steps', () => {
    const { container } = render(<App />)

    const stepLabels = container.querySelectorAll('span.text-xs.font-medium')
    const texts = Array.from(stepLabels).map((el) => el.textContent)
    expect(texts).toContain('Personal Information')
    expect(texts).toContain('Bank Information')
    expect(texts).toContain('Confirmation')
  })

  it('renders the footer', () => {
    render(<App />)

    expect(screen.getByText('PayGate')).toBeInTheDocument()
  })

  it('shows Next button on step 1', () => {
    render(<App />)

    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
  })

  it('hides Previous button on step 1', () => {
    render(<App />)

    expect(screen.queryByRole('button', { name: '← Previous' })).not.toBeInTheDocument()
  })

  it('navigates to step 2 when Next is clicked', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Next' }))

    expect(screen.getByRole('heading', { name: 'Bank Information' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Personal Information' })).not.toBeInTheDocument()
  })

  it('shows both Previous and Next on step 2', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Next' }))

    expect(screen.getByRole('button', { name: '← Previous' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
  })

  it('navigates back to step 1 when Previous is clicked', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Next' }))
    await user.click(screen.getByRole('button', { name: '← Previous' }))

    expect(screen.getByRole('heading', { name: 'Personal Information' })).toBeInTheDocument()
  })

  it('navigates to step 3 confirmation', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Next' }))
    await user.click(screen.getByRole('button', { name: 'Next' }))

    expect(screen.getByRole('heading', { name: 'Confirmation' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
  })

  it('shows success message after submit', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Next' }))
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await user.click(screen.getByRole('button', { name: 'Submit' }))

    expect(screen.getByText('Payment Account Created')).toBeInTheDocument()
  })

  it('preserves data when navigating back and forth', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.type(screen.getByLabelText('Full Name *'), 'John Doe')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await user.click(screen.getByRole('button', { name: '← Previous' }))

    expect(screen.getByLabelText('Full Name *')).toHaveValue('John Doe')
  })

  it('displays data summary on confirmation step', async () => {
    const user = userEvent.setup()

    render(<App />)

    await user.type(screen.getByLabelText('Full Name *'), 'John Doe')
    await user.type(screen.getByLabelText('Email Address *'), 'john@test.com')
    await user.click(screen.getByRole('button', { name: 'Next' }))

    await user.type(screen.getByLabelText('Card Number *'), '4111111111111111')
    await user.click(screen.getByRole('button', { name: 'Next' }))

    expect(screen.getByText('Full Name:')).toBeInTheDocument()
    expect(screen.getByText('Email:')).toBeInTheDocument()
    expect(screen.getByText('john@test.com')).toBeInTheDocument()
    expect(screen.getByText('************1111')).toBeInTheDocument()
  })
})
