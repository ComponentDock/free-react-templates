import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { OffcanvasToggle } from './OffcanvasToggle'

describe('OffcanvasToggle', () => {
  it('renders the Menu button', () => {
    render(<OffcanvasToggle onClick={() => {}} />)

    expect(screen.getByRole('button', { name: 'Toggle navigation menu' })).toBeInTheDocument()
  })

  it('displays Menu text', () => {
    render(<OffcanvasToggle onClick={() => {}} />)

    expect(screen.getByText('Menu')).toBeInTheDocument()
  })

  it('has correct styling', () => {
    render(<OffcanvasToggle onClick={() => {}} />)

    const button = screen.getByRole('button', { name: 'Toggle navigation menu' })
    expect(button.className).toContain('fixed')
    expect(button.className).toContain('uppercase')
    expect(button.className).toContain('tracking-[0.1em]')
  })

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup()
    let clicked = false
    render(
      <OffcanvasToggle
        onClick={() => {
          clicked = true
        }}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Toggle navigation menu' }))
    expect(clicked).toBe(true)
  })
})
