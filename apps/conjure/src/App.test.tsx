import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the registration heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Registration')
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Conjure — Registration Wizard')
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders step dots', () => {
    render(<App />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(3)
  })

  it('renders Forward button on step 1', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /next step/i })).toBeInTheDocument()
  })

  it('navigates to step 2 when Forward is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /next step/i }))
    expect(screen.getByText('Please fill with additional info')).toBeInTheDocument()
  })

  it('shows Backward and Submit after navigating to step 3', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /next step/i }))
    await user.click(screen.getByRole('button', { name: /next step/i }))
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /previous step/i })).toBeInTheDocument()
  })

  it('allows dot navigation', async () => {
    const user = userEvent.setup()
    render(<App />)
    const tabs = screen.getAllByRole('tab')
    const thirdTab = tabs[2]
    if (thirdTab) {
      await user.click(thirdTab)
    }
    expect(screen.getByText('Send an optional message')).toBeInTheDocument()
  })

  it('navigates backward from step 2 to step 1', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /next step/i }))
    expect(screen.getByText('Please fill with additional info')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /previous step/i }))
    expect(screen.getByText('Please fill with your details')).toBeInTheDocument()
  })

  it('navigates forward through all steps sequentially', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Step 1
    expect(screen.getByText('Please fill with your details')).toBeInTheDocument()
    // Step 2
    await user.click(screen.getByRole('button', { name: /next step/i }))
    expect(screen.getByText('Please fill with additional info')).toBeInTheDocument()
    // Step 3
    await user.click(screen.getByRole('button', { name: /next step/i }))
    expect(screen.getByText('Send an optional message')).toBeInTheDocument()
  })
})
