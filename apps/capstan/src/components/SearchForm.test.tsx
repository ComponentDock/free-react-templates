import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchForm } from './SearchForm'
import {
  SEARCH_ACTION,
  SEARCH_EMPTY,
  SEARCH_FORM_LABEL,
  SEARCH_LABEL,
  SEARCH_PLACEHOLDER,
} from '../lib/site'

describe('SearchForm — the white field at the strip end', () => {
  it('is a labelled search form holding a 46px square submit control', () => {
    render(<SearchForm />)

    const form = screen.getByRole('search', { name: SEARCH_FORM_LABEL })
    const input = screen.getByLabelText(SEARCH_LABEL)

    expect(form.className).toContain('w-[257px]')
    expect(form.className).toContain('h-[46px]')
    expect(form.className).toContain('rounded-field')
    expect(input).toHaveAttribute('placeholder', SEARCH_PLACEHOLDER)
    expect(input.className).toContain('w-[calc(100%-46px)]')
    expect(input.className).toContain('focus-visible:outline-2')

    const submit = screen.getByRole('button', { name: SEARCH_ACTION })

    expect(submit).toHaveAttribute('type', 'submit')
    expect(submit.className).toContain('size-[46px]')
    expect(submit.querySelector('svg')).not.toBeNull()
  })

  it('writes no status line until it is submitted', () => {
    render(<SearchForm />)

    expect(screen.queryByTestId('search-status')).toBeNull()
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('answers with the counter own line instead of navigating', async () => {
    const user = userEvent.setup()

    render(<SearchForm />)

    await user.type(screen.getByLabelText(SEARCH_LABEL), '  a sheave  ')
    await user.click(screen.getByRole('button', { name: SEARCH_ACTION }))

    expect(screen.getByRole('status')).toHaveTextContent('a sheave')
    expect(screen.getByRole('status').textContent).toContain(SEARCH_ACTION)
    expect(window.location.hash).toBe('')
  })

  it('asks for something to look for when it is submitted empty', async () => {
    const user = userEvent.setup()

    render(<SearchForm />)

    await user.click(screen.getByRole('button', { name: SEARCH_ACTION }))

    expect(screen.getByRole('status')).toHaveTextContent(SEARCH_EMPTY)

    await user.type(screen.getByLabelText(SEARCH_LABEL), 'turnbuckle')
    await user.click(screen.getByRole('button', { name: SEARCH_ACTION }))

    expect(screen.getByRole('status')).toHaveTextContent('turnbuckle')
  })
})
