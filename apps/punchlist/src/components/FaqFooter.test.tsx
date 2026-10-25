import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { FAQS } from '../content'
import { Contact } from './Contact'
import { Faq } from './Faq'
import { Footer } from './Footer'

describe('Faq', () => {
  it('starts closed, opens one answer and closes it again', () => {
    render(<Faq />)
    const first = screen.getByRole('button', { name: FAQS[0]!.question })
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(FAQS[0]!.answer)).toBeNull()

    fireEvent.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(first).toHaveAttribute('aria-controls', 'faq-answer-0')
    expect(screen.getByText(FAQS[0]!.answer)).toBeInTheDocument()

    fireEvent.click(first)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText(FAQS[0]!.answer)).toBeNull()
  })

  it('keeps one row open at a time', () => {
    render(<Faq />)
    fireEvent.click(screen.getByRole('button', { name: FAQS[0]!.question }))
    fireEvent.click(screen.getByRole('button', { name: FAQS[2]!.question }))
    expect(screen.queryByText(FAQS[0]!.answer)).toBeNull()
    expect(screen.getByText(FAQS[2]!.answer)).toBeInTheDocument()
    expect(screen.getAllByRole('button', { expanded: true })).toHaveLength(1)
  })

  it('closes the open row on Escape', () => {
    render(<Faq />)
    fireEvent.click(screen.getByRole('button', { name: FAQS[1]!.question }))
    expect(screen.getByText(FAQS[1]!.answer)).toBeInTheDocument()

    fireEvent.keyDown(document, { key: 'a' })
    expect(screen.getByText(FAQS[1]!.answer)).toBeInTheDocument()

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByText(FAQS[1]!.answer)).toBeNull()
  })

  it('renders all five questions', () => {
    render(<Faq />)
    expect(screen.getAllByRole('button')).toHaveLength(FAQS.length)
  })
})

describe('Contact', () => {
  it('is an orange band with two actions and no form', () => {
    const onOpenQuote = vi.fn()
    const { container } = render(<Contact onOpenQuote={onOpenQuote} />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Send us the list')
    expect(container.querySelector('form')).toBeNull()
    expect(container.querySelector('input')).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: /Get a fixed quote/ }))
    expect(onOpenQuote).toHaveBeenCalledTimes(1)
    expect(screen.getByRole('link', { name: /Check our rates first/ })).toHaveAttribute(
      'href',
      '#rates',
    )
  })
})

describe('Footer', () => {
  it('carries the brand column, three link lists and the Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText(/Local handyman and home repair/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(screen.getByRole('navigation', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Support' })).toBeInTheDocument()
    expect(screen.queryByText('Hot Desk')).toBeNull()
    expect(screen.getByRole('link', { name: '0113 496 0288' })).toHaveAttribute(
      'href',
      'tel:+441134960288',
    )
    expect(screen.getByRole('link', { name: 'bookings@punchlist.repair' })).toHaveAttribute(
      'href',
      'mailto:bookings@punchlist.repair',
    )
    expect(screen.getAllByRole('link', { name: /Instagram|Facebook|LinkedIn/ })).toHaveLength(3)
  })

  it('rejects an empty newsletter address', () => {
    render(<Footer />)
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert').textContent).toBe('Enter an email address')
    expect(screen.getByLabelText('Email address')).toHaveAttribute('aria-invalid', 'true')
  })

  it('accepts a valid address and confirms it', () => {
    render(<Footer />)
    fireEvent.change(screen.getByLabelText('Email address'), {
      target: { value: 'sam@example.com' },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status').textContent).toBe('Thanks — you are on the list.')
    expect(screen.queryByRole('alert')).toBeNull()
    expect(screen.queryByRole('button', { name: 'Subscribe' })).toBeNull()
  })
})
