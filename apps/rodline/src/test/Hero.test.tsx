import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Hero } from '../components/Hero'
import { contact, hero, needs, quoteForm } from '../content'

describe('Hero', () => {
  it('sets the two-tone headline, the proof list and the amber rating line', () => {
    const { container } = render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(`${hero.headline}${hero.headlineAccent}`)
    expect(heading.querySelector('span')).toHaveClass('text-primary-600')
    expect(heading).toHaveClass('text-4xl', 'sm:text-5xl', 'lg:text-6xl')

    hero.proof.forEach((line) => {
      expect(screen.getByText(line)).toHaveClass('text-base', 'font-medium')
    })

    expect(screen.getByText(hero.lede)).toHaveClass('text-lg', 'text-ink-500')
    expect(screen.getByRole('link', { name: contact.phone })).toHaveClass(
      'text-2xl',
      'sm:text-3xl',
    )

    const amberStars = container.querySelector('.text-amber-400')
    expect(amberStars).not.toBeNull()
    expect(amberStars?.querySelectorAll('svg')).toHaveLength(5)
    expect(screen.getByText(hero.ratingNote)).toHaveTextContent('sample data')
  })
})

describe('QuoteForm', () => {
  it('asks for three required, labelled fields', () => {
    render(<Hero />)

    const name = screen.getByLabelText('Your name')
    expect(name).toBeRequired()
    expect(name).toHaveAttribute('autocomplete', 'name')
    expect(name).toHaveAttribute('placeholder', 'First and last name')

    const phone = screen.getByLabelText('Phone')
    expect(phone).toBeRequired()
    expect(phone).toHaveAttribute('type', 'tel')
    expect(phone).toHaveAttribute('autocomplete', 'tel')

    const need = screen.getByLabelText(quoteForm.selectLabel)
    expect(need).toBeRequired()
    expect(need).toHaveValue('')

    const options = screen.getAllByRole('option')
    expect(options).toHaveLength(needs.length + 1)
    expect(options[0]).toHaveTextContent(quoteForm.selectPlaceholder)
    needs.forEach((option) => {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument()
    })

    expect(screen.getByRole('button', { name: quoteForm.submit })).toBeInTheDocument()
    expect(screen.getByText(quoteForm.finePrint)).toHaveClass('text-xs', 'text-ink-400')
  })

  it('swaps the card for the thank-you copy on submit, then offers another slot', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    await user.type(screen.getByLabelText('Your name'), 'Sam Rivera')
    await user.type(screen.getByLabelText('Phone'), '5550100148')
    await user.selectOptions(screen.getByLabelText(quoteForm.selectLabel), 'Blocked drain')

    const form = screen.getByLabelText('Your name').closest('form')
    expect(form).not.toBeNull()
    fireEvent.submit(form as HTMLFormElement)

    expect(screen.getByRole('status')).toHaveTextContent(quoteForm.thanksTitle)
    expect(screen.getByRole('status')).toHaveTextContent(quoteForm.thanksBody)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(quoteForm.thanksTitle)
    expect(within(screen.getByRole('status')).getByRole('link', { name: contact.phone })).toHaveAttribute(
      'href',
      contact.phoneHref,
    )

    await user.click(screen.getByRole('button', { name: quoteForm.again }))

    expect(screen.getByLabelText('Your name')).toHaveValue('')
    expect(screen.queryByRole('status')).toBeNull()
  })
})
