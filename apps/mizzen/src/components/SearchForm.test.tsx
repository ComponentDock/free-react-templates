import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchForm } from './SearchForm'
import { SEARCH_BUTTON_LABEL, SEARCH_ID, SEARCH_LABEL, SEARCH_PLACEHOLDER } from '../lib/site'
import { searchButtonClass, searchFormClass, searchInputClass } from '../lib/styles'

describe('SearchForm — the pill field on the chrome row', () => {
  it('is a search landmark with its own label, its own placeholder and its own button', () => {
    render(<SearchForm value="" onChange={() => {}} />)

    const form = screen.getByRole('search')
    const field = screen.getByRole('searchbox', { name: SEARCH_LABEL })

    expect(form.className).toBe(searchFormClass)
    expect(field).toHaveAttribute('id', SEARCH_ID)
    expect(field).toHaveAttribute('placeholder', SEARCH_PLACEHOLDER)
    expect(screen.getByRole('button', { name: SEARCH_BUTTON_LABEL })).toBeInTheDocument()
  })

  it('shows what the page is narrowed to and reports every keystroke', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()

    render(<SearchForm value="" onChange={onChange} />)

    await user.type(screen.getByRole('searchbox', { name: SEARCH_LABEL }), 'spar')

    expect(onChange).toHaveBeenCalledTimes(4)
    expect(String(onChange.mock.calls[3]?.[0])).toMatch(/r$/)
  })

  it('submits without leaving the page it is narrowing', () => {
    render(<SearchForm value="spar" onChange={() => {}} />)

    const form = screen.getByRole('search')

    expect(fireEvent.submit(form)).toBe(false)
    expect(screen.getByRole('searchbox', { name: SEARCH_LABEL })).toHaveValue('spar')
  })

  it('draws the design’s 50px pill, its hairline ring and its square red submit', () => {
    render(<SearchForm value="" onChange={() => {}} />)

    expect(searchFormClass).toContain('h-[50px]')
    expect(searchFormClass).toContain('rounded-pill')
    expect(searchFormClass).toContain('overflow-hidden')
    expect(searchFormClass).toContain('border-white/10')
    expect(searchFormClass).toContain('lg:w-[300px]')
    expect(searchFormClass).toContain('w-full')
    expect(searchInputClass).toContain('w-[calc(100%-50px)]')
    expect(searchInputClass).toContain('h-[50px]')
    expect(searchInputClass).toContain('border-0')
    expect(searchInputClass).toContain('text-[14px]')
    expect(searchInputClass).toContain('text-black/70')

    const submit = screen.getByRole('button', { name: SEARCH_BUTTON_LABEL })

    expect(submit).toHaveAttribute('type', 'submit')
    expect(submit.className).toBe(searchButtonClass)
    expect(submit.className).toContain('size-[50px]')
    expect(submit.className).toContain('bg-accent')
    expect(submit.className).toContain('text-white')
    expect(submit.className).toContain('border-0')
    expect(submit.querySelector('svg')).not.toBeNull()
  })
})
