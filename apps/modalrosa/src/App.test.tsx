import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the launch section', () => {
    render(<App />)
    expect(screen.getByText('Modal #3')).toBeInTheDocument()
  })

  it('opens the modal when launch button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Launch modal' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('closes the modal when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Launch modal' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('ModalRosa — Subscription Modal Popup')
  })
})
