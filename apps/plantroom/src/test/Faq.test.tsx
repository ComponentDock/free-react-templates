import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Faq } from '../components/Faq'
import { ClosingCta } from '../components/ClosingCta'
import { FAQS } from '../data'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('Faq', () => {
  it('renders the five questions closed, with the pill eyebrow', () => {
    render(<Faq />)

    expect(screen.getByText('Questions')).toHaveClass('rounded-full')

    FAQS.forEach((faq) => {
      const trigger = screen.getByRole('button', { name: faq.question })
      expect(trigger).toHaveAttribute('aria-expanded', 'false')
      expect(trigger).toHaveAttribute('aria-controls', `faq-panel-${FAQS.indexOf(faq)}`)
    })
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(FAQS.length)
    expect(screen.getAllByTestId('faq-icon')[0]!).toHaveClass('rotate-0')
    expect(screen.queryByRole('region', { name: FAQS[0]!.question })).not.toBeInTheDocument()
  })

  it('opens one row, rotates the plus and closes it again', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const first = screen.getByRole('button', { name: FAQS[0]!.question })

    await user.click(first)

    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByTestId('faq-icon')[0]!).toHaveClass('rotate-45')
    expect(screen.getByRole('region', { name: FAQS[0]!.question })).toHaveTextContent(
      'A service credit against the agreement fee',
    )

    await user.click(first)

    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('region', { name: FAQS[0]!.question })).not.toBeInTheDocument()
  })

  it('is exclusive: opening a second question closes the first', async () => {
    const user = userEvent.setup()
    render(<Faq />)

    await user.click(screen.getByRole('button', { name: FAQS[0]!.question }))
    await user.click(screen.getByRole('button', { name: FAQS[1]!.question }))

    expect(screen.getByRole('button', { name: FAQS[0]!.question })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.getByRole('button', { name: FAQS[1]!.question })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getAllByRole('region')).toHaveLength(1)
  })

  it('is operable from the keyboard', async () => {
    render(<Faq />)
    const trigger = screen.getByRole('button', { name: FAQS[4]!.question })

    trigger.focus()
    await userEvent.keyboard('{Enter}')

    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(trigger).toHaveFocus()

    await userEvent.keyboard(' ')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })
})

describe('ClosingCta', () => {
  it('renders the flat brand band with the comparison copy', () => {
    render(<ClosingCta />)

    expect(document.getElementById('contact')).toHaveClass('bg-primary-700')
    expect(
      screen.getByRole('heading', { level: 2, name: 'Comparing maintenance proposals?' }),
    ).toHaveClass('text-white')
    expect(
      screen.getByText(
        'Ask every bidder what happens when they miss a response time, then compare the answers.',
      ),
    ).toHaveClass('text-primary-100')
  })

  it('offers the survey and the phone, with no third control', () => {
    render(<ClosingCta />)

    expect(screen.getByRole('link', { name: 'Request a site survey' })).toHaveAttribute(
      'href',
      '#quote',
    )
    expect(screen.getByRole('link', { name: 'Call (555) 100-1000' })).toHaveAttribute(
      'href',
      'tel:5551001000',
    )
    expect(screen.getByRole('link', { name: 'Call (555) 100-1000' })).toHaveClass(
      'border-2',
      'border-white/40',
    )
    expect(screen.getAllByRole('link')).toHaveLength(2)
  })
})
