import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { QuoteCard } from './QuoteCard'
import { QUOTE } from '../content'

afterEach(() => {
  vi.useRealTimers()
})

describe('QuoteCard', () => {
  it('renders the three fields, the six options and the footnote', () => {
    render(<QuoteCard />)

    expect(screen.getByLabelText(QUOTE.nameLabel)).toHaveAttribute('placeholder', QUOTE.namePlaceholder)
    expect(screen.getByLabelText(QUOTE.phoneLabel)).toHaveAttribute('type', 'tel')
    const select = screen.getByLabelText(QUOTE.selectLabel)
    expect(select).toHaveValue('')
    for (const option of QUOTE.options) {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument()
    }
    expect(screen.getByRole('option', { name: QUOTE.selectPlaceholder })).toBeInTheDocument()
    expect(screen.getByText(QUOTE.footnote)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: QUOTE.submit })).toHaveAttribute('type', 'submit')
  })

  it('reports every empty required field and focuses the first one', () => {
    render(<QuoteCard />)

    fireEvent.click(screen.getByRole('button', { name: QUOTE.submit }))

    expect(screen.getByLabelText(QUOTE.nameLabel)).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText(QUOTE.phoneLabel)).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText(QUOTE.selectLabel)).toHaveAttribute('aria-invalid', 'true')
    expect(document.activeElement).toBe(screen.getByLabelText(QUOTE.nameLabel))
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('validates the phone before submit and clears the error when fixed', () => {
    render(<QuoteCard />)
    const phone = screen.getByLabelText(QUOTE.phoneLabel)

    fireEvent.change(phone, { target: { value: 'abc' } })
    fireEvent.blur(phone)

    expect(screen.getByText('Enter a phone number we can call back on.')).toBeInTheDocument()
    expect(phone).toHaveAttribute('aria-describedby', 'quote-phone-error')

    fireEvent.change(phone, { target: { value: '(555) 110-1100' } })
    fireEvent.blur(phone)
    expect(screen.queryByText('Enter a phone number we can call back on.')).toBeNull()
    expect(phone).toHaveAttribute('aria-invalid', 'false')
  })

  it('validates the name and the select on blur', () => {
    render(<QuoteCard />)

    const name = screen.getByLabelText(QUOTE.nameLabel)
    fireEvent.blur(name)
    expect(screen.getByText('This field is required.')).toBeInTheDocument()

    const select = screen.getByLabelText(QUOTE.selectLabel)
    fireEvent.blur(select)
    expect(screen.getByText('Choose the closest match.')).toBeInTheDocument()

    fireEvent.change(name, { target: { value: 'Alma R.' } })
    fireEvent.change(select, { target: { value: 'Routine pumping' } })
    fireEvent.blur(name)
    fireEvent.blur(select)
    expect(screen.queryByText('This field is required.')).toBeNull()
    expect(screen.queryByText('Choose the closest match.')).toBeNull()
  })

  it('focuses the phone then the select when only those are missing', () => {
    render(<QuoteCard />)

    fireEvent.change(screen.getByLabelText(QUOTE.nameLabel), { target: { value: 'Alma R.' } })
    fireEvent.click(screen.getByRole('button', { name: QUOTE.submit }))
    expect(document.activeElement).toBe(screen.getByLabelText(QUOTE.phoneLabel))

    fireEvent.change(screen.getByLabelText(QUOTE.phoneLabel), { target: { value: '555 110 1100' } })
    fireEvent.click(screen.getByRole('button', { name: QUOTE.submit }))
    expect(document.activeElement).toBe(screen.getByLabelText(QUOTE.selectLabel))
  })

  it('resets on a valid submit and shows the toast for four seconds', () => {
    vi.useFakeTimers()
    render(<QuoteCard />)

    fireEvent.change(screen.getByLabelText(QUOTE.nameLabel), { target: { value: 'Alma R.' } })
    fireEvent.change(screen.getByLabelText(QUOTE.phoneLabel), {
      target: { value: '(555) 110-1100' },
    })
    fireEvent.change(screen.getByLabelText(QUOTE.selectLabel), {
      target: { value: 'Inspection for a sale' },
    })
    fireEvent.click(screen.getByRole('button', { name: QUOTE.submit }))

    expect(screen.getByRole('status')).toHaveTextContent(QUOTE.success)
    expect(screen.getByLabelText(QUOTE.nameLabel)).toHaveValue('')
    expect(screen.getByLabelText(QUOTE.phoneLabel)).toHaveValue('')
    expect(screen.getByLabelText(QUOTE.selectLabel)).toHaveValue('')

    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(screen.queryByRole('status')).toBeNull()
  })
})
