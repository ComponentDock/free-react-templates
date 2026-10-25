import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Hero } from '../components/Hero'
import { QuoteCard } from '../components/QuoteCard'
import { BRAND, CHECKLIST, PROBLEMS, PROBLEM_PLACEHOLDER } from '../data'

describe('Hero', () => {
  it('states the argument with the second sentence in brand orange', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Forty or fifty gallon is the wrong question.')
    expect(screen.getByText('is the wrong question.')).toHaveClass('text-primary-600')
    expect(heading).toHaveClass('lg:text-6xl', 'text-ink-800')
  })

  it('carries the eyebrow, the sample rating and the four claims', () => {
    render(<Hero />)

    expect(screen.getByText('Richmond · Licensed and gas certified')).toHaveClass('uppercase')
    expect(screen.getByText('4.9')).toBeInTheDocument()
    expect(screen.getByText('410+ reviews on Google · sample data')).toBeInTheDocument()

    const claims = screen.getAllByRole('listitem').map((item) => item.textContent)
    expect(claims).toEqual(CHECKLIST)
  })

  it('has no photograph — the quote card is the only thing beside the copy', () => {
    render(<Hero />)

    expect(document.querySelector('img')).toBeNull()
    expect(screen.getByTestId('quote-card')).toHaveClass('rounded-2xl', 'shadow-md')
  })
})

describe('QuoteCard', () => {
  it('renders the three fields and the six problem options', () => {
    render(<QuoteCard />)

    expect(screen.getByLabelText('Your name')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()

    const select = screen.getByLabelText('What is going on?')
    const options = Array.from(select.querySelectorAll('option')).map((option) => option.textContent)
    expect(options).toEqual([PROBLEM_PLACEHOLDER, ...PROBLEMS])
    expect(screen.getByRole('button', { name: 'Get my answer' })).toHaveAttribute('type', 'submit')
  })

  it('blocks an empty submit, marks every field and focuses the first one', async () => {
    render(<QuoteCard />)

    await userEvent.click(screen.getByRole('button', { name: 'Get my answer' }))

    const name = screen.getByLabelText('Your name')
    expect(name).toHaveAttribute('aria-invalid', 'true')
    expect(name).toHaveAttribute('aria-describedby', 'quote-name-error')
    expect(screen.getAllByText('This field is required')).toHaveLength(3)
    expect(name).toHaveFocus()
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('validates the phone field on blur', async () => {
    render(<QuoteCard />)

    const phone = screen.getByLabelText('Phone')
    await userEvent.type(phone, '0900')
    await userEvent.tab()

    expect(screen.getByText('Please enter a phone number of at least ten digits')).toBeInTheDocument()
    expect(phone).toHaveAttribute('aria-invalid', 'true')
  })

  it('clears a field error once it becomes valid on blur', async () => {
    render(<QuoteCard />)
    const name = screen.getByLabelText('Your name')

    await userEvent.click(name)
    await userEvent.tab()
    expect(name).toHaveAttribute('aria-invalid', 'true')

    await userEvent.type(name, 'Alex Morgan')
    await userEvent.tab()

    expect(name).not.toHaveAttribute('aria-invalid')
    expect(document.getElementById('quote-name-error')).toBeNull()
  })

  it('validates the problem select on blur', async () => {
    render(<QuoteCard />)
    const select = screen.getByLabelText('What is going on?')

    await userEvent.click(select)
    await userEvent.tab()

    expect(select).toHaveAttribute('aria-invalid', 'true')
    expect(document.getElementById('quote-problem-error')).toHaveTextContent(
      'This field is required',
    )
  })

  it('answers a complete form with a toast and an empty form', async () => {
    vi.useFakeTimers()
    render(<QuoteCard />)

    fireEvent.change(screen.getByLabelText('Your name'), { target: { value: 'Alex Morgan' } })
    fireEvent.change(screen.getByLabelText('Phone'), { target: { value: '(555) 090-0900' } })
    fireEvent.change(screen.getByLabelText('What is going on?'), {
      target: { value: 'The tank is leaking' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Get my answer' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Thanks — we will reply within the hour on weekdays.',
    )
    expect(screen.getByLabelText('Your name')).toHaveValue('')
    expect(screen.getByLabelText('What is going on?')).toHaveValue('')

    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(screen.queryByRole('status')).toBeNull()
    vi.useRealTimers()
  })

  it('keeps the footnote and the number dialable elsewhere', () => {
    render(<QuoteCard />)

    expect(screen.getByText('No obligation. We never sell your details.')).toHaveClass('text-xs')
    expect(BRAND.phoneHref).toBe('tel:5550900900')
  })
})
