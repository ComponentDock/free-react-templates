import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { DESTINATIONS, GUESTS } from '../data/site'
import { SearchPanel } from './SearchPanel'

describe('SearchPanel', () => {
  it('renders four labelled fields, the submit and an empty status line', () => {
    render(<SearchPanel />)

    const form = screen.getByRole('form', { name: 'Search stays' })
    expect(form).toHaveAttribute('id', 'lk-search')
    expect(within(form).getByLabelText('Where')).toHaveAttribute('placeholder', 'Ordesa, Spain')
    expect(within(form).getByLabelText('Check in')).toHaveAttribute('type', 'date')
    expect(within(form).getByLabelText('Check out')).toHaveAttribute('type', 'date')
    expect(within(form).getByLabelText('Guests')).toHaveValue('2 guests')
    expect(within(form).getByRole('button', { name: 'Search' })).toHaveAttribute('type', 'submit')
    expect(within(form).getByRole('status')).toHaveTextContent('')
  })

  it('offers the five destinations behind the destination field', () => {
    render(<SearchPanel />)

    const list = document.getElementById('lk-places')
    expect(list?.tagName).toBe('DATALIST')
    expect([...(list?.querySelectorAll('option') ?? [])].map((option) => option.value)).toEqual(
      DESTINATIONS.map((place) => place.name),
    )
    expect(screen.getByLabelText('Where')).toHaveAttribute('list', 'lk-places')
  })

  it('offers the six party sizes with the third selected', () => {
    render(<SearchPanel />)

    const options = within(screen.getByLabelText('Guests')).getAllByRole('option')
    expect(options.map((option) => option.textContent)).toEqual([...GUESTS])
  })

  it('states the search in the status line on submit', async () => {
    const user = userEvent.setup()
    render(<SearchPanel />)

    await user.type(screen.getByLabelText('Where'), 'Ordino, Andorra')
    await user.click(screen.getByRole('button', { name: 'Search' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      /^Searching stays in Ordino, Andorra for 2 guests, .+ \(3 nights\)…$/,
    )
  })

  it('replaces the sentence when the next attempt is incomplete', async () => {
    const user = userEvent.setup()
    render(<SearchPanel />)

    await user.type(screen.getByLabelText('Where'), 'Ordino, Andorra')
    await user.click(screen.getByRole('button', { name: 'Search' }))
    await user.clear(screen.getByLabelText('Where'))
    await user.click(screen.getByRole('button', { name: 'Search' }))

    expect(screen.getByRole('status')).toHaveTextContent('Choose a destination.')
  })
})
