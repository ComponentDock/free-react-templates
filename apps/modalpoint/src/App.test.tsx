import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the launch button and page title', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Registration Modal')
    expect(screen.getByRole('button', { name: /launch modal/i })).toBeInTheDocument()
  })

  it('opens the modal when launch button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /launch modal/i }))

    expect(screen.getByRole('dialog', { name: /registration modal/i })).toBeInTheDocument()
    expect(screen.getByText('Registration form')).toBeInTheDocument()
  })

  it('closes the modal when the close button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /launch modal/i }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the modal when the backdrop is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /launch modal/i }))
    const dialog = screen.getByRole('dialog')

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

  it('shows form fields when modal is open', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /launch modal/i }))

    expect(screen.getByRole('combobox', { name: /country/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /month/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /day/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /year/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /privacy policy/i })).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('ModalPoint — Registration Modal Template')
  })

  it('renders the footer with componentdock link', () => {
    render(<App />)
    const link = screen.getByRole('link', {
      name: /more templates at component dock/i,
    })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
