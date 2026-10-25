import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { QuoteDialog } from './QuoteDialog'

describe('QuoteDialog', () => {
  it('renders nothing while closed', () => {
    const { container } = render(<QuoteDialog open={false} onClose={vi.fn()} />)
    expect(container).toBeEmptyDOMElement()
  })

  it('shows the four labelled controls and the contact sidebar', () => {
    render(<QuoteDialog open onClose={vi.fn()} />)
    const dialog = screen.getByRole('dialog', { name: 'Send us the list' })
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(screen.getByLabelText('Your name')).toHaveFocus()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('What needs doing (optional)')).toBeInTheDocument()
    expect(screen.getByLabelText('The list')).toHaveAttribute('rows', '5')
    expect(screen.getByRole('link', { name: '0113 496 0288' })).toHaveAttribute(
      'href',
      'tel:+441134960288',
    )
    expect(screen.getByText('Unit 3, Hollin Works, Leeds, LS9 8AJ')).toBeInTheDocument()
    expect(screen.getByText('Saturday: 08:00 – 13:00')).toBeInTheDocument()
  })

  it('blocks submission with per-field errors', () => {
    render(<QuoteDialog open onClose={vi.fn()} />)
    fireEvent.click(screen.getByRole('button', { name: 'Send the list' }))
    expect(screen.getAllByRole('alert')).toHaveLength(3)
    expect(screen.getByText('Enter your name')).toBeInTheDocument()
    expect(screen.getByText('Enter an email address we can reply to')).toBeInTheDocument()
    expect(screen.getByText('Tell us what needs doing')).toBeInTheDocument()
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('sends a valid list and confirms it', () => {
    render(<QuoteDialog open onClose={vi.fn()} />)
    fireEvent.change(screen.getByLabelText('Your name'), { target: { value: 'Sam Okafor' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'sam@example.com' } })
    fireEvent.change(screen.getByLabelText('What needs doing (optional)'), {
      target: { value: 'Shelving' },
    })
    fireEvent.change(screen.getByLabelText('The list'), {
      target: { value: 'Six shelves and a sticking door.' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Send the list' }))
    expect(screen.getByRole('status').textContent).toContain('your list is in')
    expect(screen.queryByLabelText('Your name')).toBeNull()
  })

  it('closes on Escape, on the close control and on the backdrop', () => {
    const onClose = vi.fn()
    render(<QuoteDialog open onClose={onClose} />)
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)

    fireEvent.keyDown(document, { key: 'a' })
    expect(onClose).toHaveBeenCalledTimes(1)

    const closes = screen.getAllByRole('button', { name: 'Close' })
    fireEvent.click(closes[0]!)
    fireEvent.click(closes[1]!)
    expect(onClose).toHaveBeenCalledTimes(3)
  })

  it('starts from a clean form when it is reopened', () => {
    const { rerender } = render(<QuoteDialog open onClose={vi.fn()} />)
    fireEvent.change(screen.getByLabelText('Your name'), { target: { value: 'Sam' } })
    fireEvent.click(screen.getByRole('button', { name: 'Send the list' }))
    expect(screen.getAllByRole('alert')).toHaveLength(2)

    rerender(<QuoteDialog open={false} onClose={vi.fn()} />)
    rerender(<QuoteDialog open onClose={vi.fn()} />)
    expect((screen.getByLabelText('Your name') as HTMLInputElement).value).toBe('')
    expect(screen.queryByRole('alert')).toBeNull()
  })
})
