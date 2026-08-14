import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the heading, email input and orange Subscribe button', () => {
    render(<Newsletter />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Subscribe to our Newsletter' }),
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter email address')).toBeInTheDocument()
    const button = screen.getByRole('button', { name: 'Subscribe' })
    expect(button.className).toContain('bg-accent')
  })

  it('shows a confirmation message after submitting', () => {
    render(<Newsletter />)
    fireEvent.submit(screen.getByRole('textbox'))
    expect(screen.getByRole('status')).toHaveTextContent("you're on the list")
    expect(screen.queryByPlaceholderText('Enter email address')).not.toBeInTheDocument()
  })
})
