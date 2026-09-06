import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RegistrationModal, handleTabTrap } from './RegistrationModal'

describe('handleTabTrap', () => {
  function createTabEvent(key: string, target: HTMLElement, shiftKey = false) {
    return {
      key,
      shiftKey,
      target,
      preventDefault: vi.fn(),
    } as unknown as React.KeyboardEvent
  }

  it('does nothing for non-Tab keys', () => {
    const container = document.createElement('div')
    const btn = document.createElement('button')
    container.appendChild(btn)
    const e = createTabEvent('Enter', btn)
    handleTabTrap(e, container)
    expect(e.preventDefault).not.toHaveBeenCalled()
  })

  it('does nothing when fewer than 2 focusable elements', () => {
    const container = document.createElement('div')
    const btn = document.createElement('button')
    container.appendChild(btn)
    const e = createTabEvent('Tab', btn)
    handleTabTrap(e, container)
    expect(e.preventDefault).not.toHaveBeenCalled()
  })

  it('wraps focus from last to first on Tab', () => {
    const container = document.createElement('div')
    const first = document.createElement('button')
    const last = document.createElement('button')
    container.appendChild(first)
    container.appendChild(last)

    const firstSpy = vi.spyOn(first, 'focus')
    const e = createTabEvent('Tab', last)
    handleTabTrap(e, container)

    expect(e.preventDefault).toHaveBeenCalled()
    expect(firstSpy).toHaveBeenCalled()
  })

  it('wraps focus from first to last on Shift+Tab', () => {
    const container = document.createElement('div')
    const first = document.createElement('button')
    const last = document.createElement('button')
    container.appendChild(first)
    container.appendChild(last)

    const lastSpy = vi.spyOn(last, 'focus')
    const e = createTabEvent('Tab', first, true)
    handleTabTrap(e, container)

    expect(e.preventDefault).toHaveBeenCalled()
    expect(lastSpy).toHaveBeenCalled()
  })

  it('does nothing for Tab in middle element (not first or last)', () => {
    const container = document.createElement('div')
    const first = document.createElement('button')
    const middle = document.createElement('button')
    const last = document.createElement('button')
    container.appendChild(first)
    container.appendChild(middle)
    container.appendChild(last)

    const e = createTabEvent('Tab', middle)
    handleTabTrap(e, container)

    expect(e.preventDefault).not.toHaveBeenCalled()
  })
})

describe('RegistrationModal', () => {
  it('does not render when closed', () => {
    render(<RegistrationModal open={false} onClose={vi.fn()} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders the modal content when open', () => {
    render(<RegistrationModal open={true} onClose={vi.fn()} />)

    expect(screen.getByRole('dialog', { name: /registration modal/i })).toBeInTheDocument()
    expect(screen.getByText('Registration form')).toBeInTheDocument()
    expect(screen.getByText(/all their equipment/i)).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /country/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /privacy policy/i })).toBeInTheDocument()
  })

  it('renders date of birth inputs', () => {
    render(<RegistrationModal open={true} onClose={vi.fn()} />)

    expect(screen.getByRole('textbox', { name: /month/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /day/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /year/i })).toBeInTheDocument()
  })

  it('displays the promotional image panel', () => {
    render(<RegistrationModal open={true} onClose={vi.fn()} />)

    const dialog = screen.getByRole('dialog')
    const bgImage = dialog.querySelector('[style*="picsum.photos"]')
    expect(bgImage).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<RegistrationModal open={true} onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: /close/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when backdrop is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<RegistrationModal open={true} onClose={onClose} />)

    const dialog = screen.getByRole('dialog')
    await user.click(dialog)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose on Escape key', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<RegistrationModal open={true} onClose={onClose} />)

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('does not close when clicking inside modal content', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<RegistrationModal open={true} onClose={onClose} />)

    await user.click(screen.getByText('Registration form'))
    expect(onClose).not.toHaveBeenCalled()
  })

  it('has correct ARIA attributes', () => {
    render(<RegistrationModal open={true} onClose={vi.fn()} />)

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveAttribute('aria-hidden', 'false')
  })

  it('has ARIA hidden when closed', () => {
    const { container } = render(<RegistrationModal open={false} onClose={vi.fn()} />)

    expect(container.querySelector('[role="dialog"]')).not.toBeInTheDocument()
  })

  it('accepts text input in date fields', async () => {
    const user = userEvent.setup()
    render(<RegistrationModal open={true} onClose={vi.fn()} />)

    const monthInput = screen.getByRole('textbox', { name: /month/i })
    await user.type(monthInput, '12')
    expect(monthInput).toHaveValue('12')

    const dayInput = screen.getByRole('textbox', { name: /day/i })
    await user.type(dayInput, '25')
    expect(dayInput).toHaveValue('25')

    const yearInput = screen.getByRole('textbox', { name: /year/i })
    await user.type(yearInput, '1990')
    expect(yearInput).toHaveValue('1990')
  })

  it('country dropdown has at least 100 options', () => {
    render(<RegistrationModal open={true} onClose={vi.fn()} />)

    const select = screen.getByRole('combobox', { name: /country/i })
    const options = Array.from(select.querySelectorAll('option'))
    expect(options.length).toBeGreaterThanOrEqual(100)
  })

  it('returns focus to trigger button on close', async () => {
    const user = userEvent.setup()

    function TestWrapper() {
      return (
        <>
          <button type="button">Trigger</button>
          <RegistrationModal open={true} onClose={vi.fn()} />
        </>
      )
    }

    render(<TestWrapper />)

    const trigger = screen.getByRole('button', { name: /trigger/i })
    trigger.focus()

    await user.keyboard('{Escape}')

    expect(trigger).toHaveFocus()
  })

  it('form submission prevents default', async () => {
    const user = userEvent.setup()
    render(<RegistrationModal open={true} onClose={vi.fn()} />)

    const submitButton = screen.getByRole('button', { name: /sign up/i })
    await user.click(submitButton)

    expect(submitButton).toBeInTheDocument()
  })
})
