import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { SearchCard } from './SearchCard'

describe('SearchCard', () => {
  it('renders the four search fields with the reference destinations', () => {
    render(<SearchCard />)

    const form = screen.getByRole('form', { name: 'Search availability' })
    expect(form.className).toContain('bg-white')
    expect(form.className).toContain('card-shadow')

    const destination = screen.getByLabelText('Destination')
    expect(destination.tagName).toBe('SELECT')
    expect(destination.className).toContain('border-line')
    expect([...destination.querySelectorAll('option')].map((option) => option.value)).toEqual([
      'Peru',
      'Japan',
      'Thailand',
      'Brazil',
      'United States',
      'Israel',
      'China',
      'Russia',
    ])

    expect(screen.getByLabelText('Dates')).toHaveAttribute('placeholder', 'Dates')
    expect(screen.getByLabelText('People')).toHaveAttribute('placeholder', 'Enter # of People')

    const submit = screen.getByRole('button', { name: 'Search' })
    expect(submit).toHaveAttribute('type', 'submit')
    expect(submit.className).toContain('bg-brand')
  })

  it('does not navigate away when the form is submitted', () => {
    render(<SearchCard />)

    const form = screen.getByRole('form', { name: 'Search availability' })
    const event = new Event('submit', { bubbles: true, cancelable: true })
    fireEvent(form, event)

    expect(event.defaultPrevented).toBe(true)
  })
})
