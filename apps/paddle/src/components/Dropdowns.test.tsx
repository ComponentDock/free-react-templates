import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Dropdowns } from './Dropdowns'

describe('Dropdowns', () => {
  it('renders 4 dropdown toggles', () => {
    render(<Dropdowns />)
    expect(screen.getByText('Primary', { selector: 'button' })).toBeInTheDocument()
    expect(screen.getByText('Secondary', { selector: 'button' })).toBeInTheDocument()
    expect(screen.getByText('Tertiary', { selector: 'button' })).toBeInTheDocument()
    expect(screen.getByText('Quarternary', { selector: 'button' })).toBeInTheDocument()
  })

  it('clicking a dropdown toggle opens its menu', async () => {
    const user = userEvent.setup()
    render(<Dropdowns />)
    const primaryBtn = screen.getByText('Primary', { selector: 'button' })
    await user.click(primaryBtn)
    expect(screen.getByText('Action', { selector: 'button' })).toBeInTheDocument()
    expect(screen.getByText('Another action', { selector: 'button' })).toBeInTheDocument()
    expect(screen.getByText('Something else here', { selector: 'button' })).toBeInTheDocument()
  })

  it('clicking a dropdown toggle twice closes its menu', async () => {
    const user = userEvent.setup()
    render(<Dropdowns />)
    const primaryBtn = screen.getByText('Primary', { selector: 'button' })
    await user.click(primaryBtn)
    expect(screen.getByText('Action', { selector: 'button' })).toBeInTheDocument()
    await user.click(primaryBtn)
    expect(screen.queryAllByText('Action', { selector: 'button' })).toHaveLength(0)
  })

  it('dropdown buttons have aria-haspopup', () => {
    render(<Dropdowns />)
    const btns = screen.getAllByRole('button')
    const primaryBtn = btns.find((b) => b.textContent === 'Primary')
    expect(primaryBtn).toHaveAttribute('aria-haspopup', 'true')
  })

  it('dropdown buttons have aria-expanded false by default', () => {
    render(<Dropdowns />)
    const btns = screen.getAllByRole('button')
    const primaryBtn = btns.find((b) => b.textContent === 'Primary')
    expect(primaryBtn).toHaveAttribute('aria-expanded', 'false')
  })

  it('dropdown buttons have aria-expanded true when open', async () => {
    const user = userEvent.setup()
    render(<Dropdowns />)
    const btns = screen.getAllByRole('button')
    const primaryBtn = btns.find((b) => b.textContent === 'Primary')!
    await user.click(primaryBtn)
    expect(primaryBtn).toHaveAttribute('aria-expanded', 'true')
  })

  it('clicking a menu item closes the dropdown', async () => {
    const user = userEvent.setup()
    render(<Dropdowns />)
    const btns = screen.getAllByRole('button')
    const primaryBtn = btns.find((b) => b.textContent === 'Primary')!
    await user.click(primaryBtn)
    const actionBtn = screen.getByText('Action', { selector: 'button' })
    await user.click(actionBtn)
    expect(screen.queryByText('Another action', { selector: 'button' })).not.toBeInTheDocument()
  })

  it('clicking outside an open dropdown closes it', async () => {
    const user = userEvent.setup()
    render(<Dropdowns />)
    const btns = screen.getAllByRole('button')
    const primaryBtn = btns.find((b) => b.textContent === 'Primary')!
    await user.click(primaryBtn)
    expect(screen.getByText('Action', { selector: 'button' })).toBeInTheDocument()
    await user.click(document.body)
    expect(screen.queryByText('Action', { selector: 'button' })).not.toBeInTheDocument()
  })
})
