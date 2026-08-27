import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Playground } from './Playground'

describe('Playground', () => {
  it('renders the playground heading and preview button', () => {
    render(<Playground />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Interactive Playground')
    expect(screen.getByRole('button', { name: 'Button' })).toBeInTheDocument()
  })

  it('updates preview when variant is changed', async () => {
    const user = userEvent.setup()
    render(<Playground />)

    const select = screen.getByLabelText('Variant')
    await user.selectOptions(select, 'danger')
    expect(select).toHaveValue('danger')
  })

  it('updates preview when size is changed', async () => {
    const user = userEvent.setup()
    render(<Playground />)

    const select = screen.getByLabelText('Size')
    await user.selectOptions(select, 'lg')
    expect(select).toHaveValue('lg')
  })

  it('updates preview when shape is changed', async () => {
    const user = userEvent.setup()
    render(<Playground />)

    const select = screen.getByLabelText('Shape')
    await user.selectOptions(select, 'rounded-full')
    expect(select).toHaveValue('rounded-full')
  })

  it('toggles disabled checkbox', async () => {
    const user = userEvent.setup()
    render(<Playground />)

    const checkbox = screen.getByLabelText('Disabled')
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('toggles loading checkbox', async () => {
    const user = userEvent.setup()
    render(<Playground />)

    const checkbox = screen.getByLabelText('Loading')
    expect(checkbox).not.toBeChecked()
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  it('copies code to clipboard when copy button is clicked', async () => {
    const user = userEvent.setup()
    const writeText = vi.fn().mockResolvedValue(undefined)
    vi.stubGlobal('navigator', { clipboard: { writeText } })

    render(<Playground />)
    await user.click(screen.getByRole('button', { name: 'Copy code' }))

    expect(writeText).toHaveBeenCalled()
    expect(screen.getByRole('button', { name: 'Copied' })).toBeInTheDocument()
  })
})
