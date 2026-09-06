import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the page with heading and launch button', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('ModalShift')
    expect(screen.getByRole('button', { name: /launch modal/i })).toBeInTheDocument()
  })

  it('opens modal when launch button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /launch modal/i }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('closes modal when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /launch modal/i }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes modal on backdrop click', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /launch modal/i }))
    await user.click(screen.getByTestId('backdrop'))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })

  it('sets document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('ModalShift — Login Modal Template')
  })
})
