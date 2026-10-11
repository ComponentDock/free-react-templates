import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PopoversShowcase } from './PopoversShowcase'

describe('PopoversShowcase', () => {
  it('renders the four directional triggers without open cards', () => {
    render(<PopoversShowcase />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Popovers')

    const triggers = screen.getAllByRole('button', { name: /popover on/i })
    expect(triggers).toHaveLength(4)
    triggers.forEach((trigger) => expect(trigger).toHaveAttribute('aria-expanded', 'false'))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('toggles a single popover card and closes it again', async () => {
    const user = userEvent.setup()
    render(<PopoversShowcase />)

    const triggers = screen.getAllByRole('button', { name: /popover on/i })

    await user.click(triggers[1]!)
    expect(triggers[1]).toHaveAttribute('aria-expanded', 'true')

    const card = screen.getByRole('dialog', { name: 'Popover on right' })
    expect(card.className).toContain('shadow-kit-popover')
    expect(screen.getByText('Popover title').className).toContain('text-kit-secondary')

    await user.click(triggers[3]!)
    expect(screen.getAllByRole('dialog')).toHaveLength(1)

    await user.click(triggers[3]!)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
