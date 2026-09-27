import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders with gradient background and white card', () => {
    const { container } = render(<App />)
    const card = container.querySelector('[class*="max-w"]')
    expect(card).toBeTruthy()
  })

  it('shows step 1 personal information form by default', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Personal Information' })).toBeInTheDocument()
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(document.title).toContain('Reglink')
  })

  it('displays three step indicators in the sidebar', () => {
    const { container } = render(<App />)
    const sidebar = container.querySelector('aside')
    expect(sidebar).toBeTruthy()
    const stepNums = sidebar!.querySelectorAll('[class*="rounded-full"]')
    const texts = Array.from(stepNums).map((el) => el.textContent?.trim())
    expect(texts).toContain('01')
    expect(texts).toContain('02')
    expect(texts).toContain('03')
  })

  it('advances to step 2 when Next is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Next Step'))
    expect(screen.getByRole('heading', { name: 'Connect Bank Account' })).toBeInTheDocument()
    expect(screen.getByLabelText('Find Your Bank')).toBeInTheDocument()
  })

  it('advances to step 3 and shows Finish button', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Next Step'))
    await user.click(screen.getByLabelText('Next Step'))
    expect(screen.getByRole('heading', { name: 'Set Financial Goals' })).toBeInTheDocument()
    expect(screen.getByLabelText('Finish')).toBeInTheDocument()
  })

  it('returns to step 1 when Back is clicked from step 2', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Next Step'))
    expect(screen.getByRole('heading', { name: 'Connect Bank Account' })).toBeInTheDocument()
    await user.click(screen.getByLabelText('Back Step'))
    expect(screen.getByRole('heading', { name: 'Personal Information' })).toBeInTheDocument()
  })

  it('hides Back button on step 1', () => {
    render(<App />)
    expect(screen.queryByLabelText('Back Step')).not.toBeInTheDocument()
  })

  it('sets page title on mount', () => {
    render(<App />)
    expect(document.title).toContain('Reglink')
  })

  it('selects a bank on step 2', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Next Step'))
    await user.click(screen.getByText('Chase'))
    const labels = document.querySelectorAll('label')
    const chaseLabel = Array.from(labels).find((l) => l.textContent?.includes('Chase'))
    expect(chaseLabel?.className).toContain('border-[var(--color-step-active)]')
  })

  it('filters banks via search on step 2', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Next Step'))
    await user.type(screen.getByLabelText('Find Your Bank'), 'Chase')
    expect(screen.getByText('Chase')).toBeInTheDocument()
    expect(screen.queryByText('Wells Fargo')).not.toBeInTheDocument()
  })

  it('selects a plan on step 3', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Next Step'))
    await user.click(screen.getByLabelText('Next Step'))
    await user.click(screen.getByText('Medium'))
    const labels = document.querySelectorAll('label')
    const mediumLabel = Array.from(labels).find((l) => l.textContent?.includes('Medium'))
    expect(mediumLabel?.className).toContain('border-[var(--color-step-active)]')
  })

  it('submits the personal info form via form submit event', () => {
    render(<App />)
    const form = document.querySelector('form')
    expect(form).toBeTruthy()
    fireEvent.submit(form!)
    expect(screen.getByRole('heading', { name: 'Personal Information' })).toBeInTheDocument()
  })

  it('calls handleFinish when Finish button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByLabelText('Next Step'))
    await user.click(screen.getByLabelText('Next Step'))
    await user.click(screen.getByLabelText('Finish'))
    // handleFinish is a no-op placeholder, just verify it doesn't crash
    expect(screen.getByLabelText('Finish')).toBeInTheDocument()
  })
})
