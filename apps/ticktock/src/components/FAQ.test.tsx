import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders section heading', () => {
    render(<FAQ />)
    expect(screen.getByText(/frequently asked questions/i)).toBeInTheDocument()
  })

  it('renders FAQ items', () => {
    render(<FAQ />)
    expect(screen.getByText('Are your templates responsive?')).toBeInTheDocument()
    expect(screen.getByText('Does it include all the features mentioned?')).toBeInTheDocument()
    expect(screen.getByText('Can I use these themes for my client?')).toBeInTheDocument()
    expect(screen.getByText('How do I customize the color scheme?')).toBeInTheDocument()
  })

  it('first item is open by default', () => {
    render(<FAQ />)
    const buttons = screen.getAllByRole('button', { name: /are your templates responsive/i })
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true')
  })

  it('toggles FAQ items on click', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    const secondButton = screen.getByRole('button', { name: /does it include all the features/i })
    expect(secondButton).toHaveAttribute('aria-expanded', 'false')
    await user.click(secondButton)
    expect(secondButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes first item when another is opened', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    const buttons = screen.getAllByRole('button', { name: /are your templates responsive/i })
    const firstButton = buttons[0]!
    const secondButton = screen.getByRole('button', { name: /does it include all the features/i })
    expect(firstButton).toHaveAttribute('aria-expanded', 'true')
    await user.click(secondButton)
    expect(firstButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles off an open item when clicked again', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    const buttons = screen.getAllByRole('button', { name: /are your templates responsive/i })
    const firstButton = buttons[0]!
    expect(firstButton).toHaveAttribute('aria-expanded', 'true')
    await user.click(firstButton)
    expect(firstButton).toHaveAttribute('aria-expanded', 'false')
  })
})
