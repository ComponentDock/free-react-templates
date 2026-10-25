import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { QUOTE } from '../content'
import { QuoteForm } from './QuoteForm'

function fill(name: string, phone: string) {
  fireEvent.change(screen.getByLabelText(QUOTE.nameLabel), { target: { value: name } })
  fireEvent.change(screen.getByLabelText(QUOTE.phoneLabel), { target: { value: phone } })
}

describe('QuoteForm', () => {
  it('renders the three labelled controls and the lime submit', () => {
    render(<QuoteForm />)
    expect(screen.getByLabelText(QUOTE.nameLabel)).toHaveAttribute('type', 'text')
    expect(screen.getByLabelText(QUOTE.phoneLabel)).toHaveAttribute('type', 'tel')
    expect(screen.getByLabelText(QUOTE.replaceLabel).tagName).toBe('SELECT')
    expect(screen.getByRole('button', { name: QUOTE.submit })).toBeInTheDocument()
    expect(screen.getByText(QUOTE.note)).toBeInTheDocument()
  })

  it('offers the placeholder plus the six replacement options', () => {
    render(<QuoteForm />)
    const options = Array.from(
      (screen.getByLabelText(QUOTE.replaceLabel) as HTMLSelectElement).options,
    ).map((option) => option.value)
    expect(options).toEqual(['', ...QUOTE.replaceOptions])
  })

  it('blocks an empty submit and names both missing fields', () => {
    render(<QuoteForm />)
    fireEvent.click(screen.getByRole('button', { name: QUOTE.submit }))
    expect(screen.getByText(QUOTE.nameError)).toBeInTheDocument()
    expect(screen.getByText(QUOTE.phoneError)).toBeInTheDocument()
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('rejects a phone number that cannot be dialled', () => {
    render(<QuoteForm />)
    fill('Jordan Ellis', '12')
    fireEvent.click(screen.getByRole('button', { name: QUOTE.submit }))
    expect(screen.queryByText(QUOTE.nameError)).toBeNull()
    expect(screen.getByText(QUOTE.phoneError)).toBeInTheDocument()
  })

  it('confirms inline once the name and a real number are supplied', () => {
    render(<QuoteForm />)
    fill('Jordan Ellis', '(555) 120-1200')
    fireEvent.change(screen.getByLabelText(QUOTE.replaceLabel), {
      target: { value: 'A gas furnace' },
    })
    fireEvent.click(screen.getByRole('button', { name: QUOTE.submit }))
    expect(screen.getByRole('status')).toHaveTextContent(QUOTE.success)
    expect(screen.queryByRole('button', { name: QUOTE.submit })).toBeNull()
    expect(screen.getByText(QUOTE.note)).toBeInTheDocument()
  })
})
