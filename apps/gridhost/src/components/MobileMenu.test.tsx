import { useRef, useState } from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MobileMenu } from './MobileMenu'

function Harness({ initialOpen = true }: { initialOpen?: boolean }) {
  const [open, setOpen] = useState(initialOpen)
  const [active, setActive] = useState('Home')
  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <button ref={triggerRef} type="button" aria-label="Open the menu" onClick={() => setOpen(true)}>
        Toggle
      </button>
      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        active={active}
        onNavigate={setActive}
        triggerRef={triggerRef}
      />
    </>
  )
}

describe('MobileMenu', () => {
  it('renders nothing while it is closed', () => {
    render(<Harness initialOpen={false} />)

    expect(screen.queryByRole('dialog', { name: 'Site menu' })).toBeNull()
  })

  it('opens as a dialog, moves focus in and back to the toggle on Escape', async () => {
    const user = userEvent.setup()
    render(<Harness />)

    await waitFor(() => expect(screen.getByRole('button', { name: 'Close the menu' })).toHaveFocus())

    await user.keyboard('{Escape}')

    expect(screen.queryByRole('dialog', { name: 'Site menu' })).toBeNull()
    expect(screen.getByRole('button', { name: 'Open the menu' })).toHaveFocus()
  })

  it('closes from the close control and from the veil', async () => {
    const user = userEvent.setup()
    render(<Harness />)

    await user.click(screen.getByRole('button', { name: 'Close the menu' }))
    expect(screen.queryByRole('dialog', { name: 'Site menu' })).toBeNull()

    await user.click(screen.getByRole('button', { name: 'Open the menu' }))
    await user.click(screen.getByTestId('menu-veil'))
    expect(screen.queryByRole('dialog', { name: 'Site menu' })).toBeNull()
  })

  it('expands the child list and follows a nested destination', async () => {
    const user = userEvent.setup()
    render(<Harness />)

    const toggle = screen.getByRole('button', { name: 'Show the Blog links' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Blog details' })).toBeNull()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const child = screen.getByRole('link', { name: 'Blog details' })
    expect(child).toHaveAttribute('href', '#blog-details')
    await user.click(child)

    await user.click(screen.getByRole('link', { name: 'Services' }))
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('aria-current', 'page')

    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Show the Blog links' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('offers the phone action and traps Tab inside the panel', () => {
    render(<Harness />)

    const call = screen.getByRole('link', { name: 'Call support on +1 888 240 1180' })
    expect(call).toHaveAttribute('href', 'tel:+18882401180')

    const close = screen.getByRole('button', { name: 'Close the menu' })
    close.focus()
    fireEvent.keyDown(close, { key: 'Tab', shiftKey: true })
    expect(call).toHaveFocus()

    fireEvent.keyDown(call, { key: 'Tab' })
    expect(close).toHaveFocus()
  })
})
