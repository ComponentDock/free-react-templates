import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders split-screen layout with left and right panels', () => {
    render(<App />)
    // "Au" and "Creative" are in separate elements — match via heading role + textContent
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading.textContent).toMatch(/Au.*Creative/)
    expect(screen.getByText('Sign up now to try undraw 30 days for free')).toBeInTheDocument()
    expect(
      screen.getByText('MIT licensed illustrations for every project you can imagine and create'),
    ).toBeInTheDocument()
  })

  it('displays step 1 / 4 indicator on load', () => {
    render(<App />)
    expect(screen.getByText('Step 1 / 4')).toBeInTheDocument()
  })

  it('shows name input on step 1', () => {
    render(<App />)
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
  })

  it('shows Next button on step 1', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  it('does not show Previous button on step 1', () => {
    render(<App />)
    expect(screen.queryByRole('button', { name: /previous/i })).not.toBeInTheDocument()
  })

  it('navigates to step 2 when Next is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('Step 2 / 4')).toBeInTheDocument()
    expect(screen.queryByText('Step 1 / 4')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument()
  })

  it('shows Previous button on step 2', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
  })

  it('navigates back to step 1 when Previous is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /previous/i }))
    expect(screen.getByText('Step 1 / 4')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Name')).toBeInTheDocument()
  })

  it('navigates through all 4 steps', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Step 1 -> 2
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('Step 2 / 4')).toBeInTheDocument()
    // Step 2 -> 3
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('Step 3 / 4')).toBeInTheDocument()
    expect(screen.getByLabelText('Your Password')).toBeInTheDocument()
    // Step 3 -> 4
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('Step 4 / 4')).toBeInTheDocument()
    expect(screen.getByLabelText('Confirm your password')).toBeInTheDocument()
  })

  it('shows Finish button on step 4', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('button', { name: /finish/i })).toBeInTheDocument()
  })

  it('shows completion message when Finish is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /finish/i }))
    expect(screen.getByText('Registration Complete!')).toBeInTheDocument()
    expect(screen.getByText(/Thank you for signing up/)).toBeInTheDocument()
  })

  it('renders illustration image', () => {
    render(<App />)
    const img = screen.getByAltText('Signup illustration')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('renders Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
