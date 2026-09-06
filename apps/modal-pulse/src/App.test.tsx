import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the launch button and page title', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('ModalPulse')
    expect(screen.getByRole('button', { name: /launch modal/i })).toBeInTheDocument()
  })

  it('opens the modal when launch button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /launch modal/i }))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Introducing Work from Anywhere')).toBeInTheDocument()
  })

  it('closes the modal when the no thanks link is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /launch modal/i }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /no thanks/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the modal when the backdrop is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /launch modal/i }))
    const dialog = screen.getByRole('dialog')

    // Click the backdrop (the overlay div, not the modal content)
    await user.click(dialog)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the modal on Escape key', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /launch modal/i }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('shows the get the app button', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /launch modal/i }))
    expect(screen.getByRole('button', { name: /get the app/i })).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('ModalPulse — Offer Modal Template')
  })

  it('renders the footer with componentdock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /more templates at component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('does not show the modal initially', () => {
    render(<App />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('shows the illustration image when modal is open', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /launch modal/i }))
    const img = screen.getByRole('img', { name: /work from anywhere illustration/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('has no references to ColorLib', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /launch modal/i }))

    // Check that no text mentions ColorLib
    expect(screen.queryByText(/colorlib/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/color lib/i)).not.toBeInTheDocument()
  })
})
