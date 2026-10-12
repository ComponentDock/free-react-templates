import { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchForm } from './SearchForm'
import { SEARCH_BUTTON_LABEL, SEARCH_ID, SEARCH_LABEL, SEARCH_PLACEHOLDER } from '../lib/site'
import { searchFormClass, searchInputClass } from '../lib/styles'

/** The field as the bar drives it: its own value, reported on every keystroke. */
function Harness() {
  const [value, setValue] = useState('')

  return <SearchForm value={value} onChange={setValue} />
}

describe('SearchForm — the 257 × 46 field', () => {
  it('is a named search landmark holding a labelled field and a named button', () => {
    render(<SearchForm value="" onChange={() => {}} />)

    const form = screen.getByRole('search')
    const input = screen.getByRole('searchbox', { name: SEARCH_LABEL })

    expect(form).toContainElement(input)
    expect(input).toHaveAttribute('id', SEARCH_ID)
    expect(input).toHaveAttribute('placeholder', SEARCH_PLACEHOLDER)
    expect(screen.getByLabelText(SEARCH_LABEL)).toBe(input)
    expect(screen.getByRole('button', { name: SEARCH_BUTTON_LABEL })).toBeInTheDocument()
  })

  it('keeps the design’s own measurements and its last-on-screen order', () => {
    render(<SearchForm value="" onChange={() => {}} />)

    const form = screen.getByRole('search')

    expect(form.className).toContain('h-[46px]')
    expect(form.className).toContain('w-[257px]')
    expect(form.className).toContain('rounded-search')
    expect(form.className).toContain('border-black/5')
    expect(form.className).toContain('overflow-hidden')
    expect(form.className).toContain('lg:order-[13]')
    expect(searchFormClass).toContain('shrink-0')

    const input = screen.getByRole('searchbox', { name: SEARCH_LABEL })

    expect(input.className).toContain('w-[calc(100%-46px)]')
    expect(input.className).toContain('h-[46px]')
    expect(input.className).toContain('border-0')
    expect(input.className).toContain('text-[14px]')
    expect(searchInputClass).toContain('focus-visible:outline-accent')

    const button = screen.getByRole('button', { name: SEARCH_BUTTON_LABEL })

    expect(button.className).toContain('size-[46px]')
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.querySelector('svg')).not.toBeNull()
  })

  it('reports every keystroke, so the page can narrow as it is typed into', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()

    render(<SearchForm value="" onChange={onChange} />)

    await user.type(screen.getByRole('searchbox', { name: SEARCH_LABEL }), 'pencil')

    expect(onChange.mock.calls.flat()).toEqual(['p', 'e', 'n', 'c', 'i', 'l'])
  })

  it('shows the query it is handed', () => {
    render(<SearchForm value="pencil" onChange={() => {}} />)

    expect(screen.getByRole('searchbox', { name: SEARCH_LABEL })).toHaveValue('pencil')
  })

  it('narrows the page from a typed query rather than a submitted one', async () => {
    const user = userEvent.setup()

    render(<Harness />)

    const input = screen.getByRole('searchbox', { name: SEARCH_LABEL })

    await user.type(input, 'pencil')

    expect(input).toHaveValue('pencil')

    await user.click(screen.getByRole('button', { name: SEARCH_BUTTON_LABEL }))

    expect(input).toHaveValue('pencil')
  })

  it('never navigates away from the page it is narrowing', () => {
    render(<Harness />)

    const form = screen.getByRole('search')

    fireEvent.submit(form)

    expect(screen.getByRole('searchbox', { name: SEARCH_LABEL })).toBeInTheDocument()
    expect(form).not.toHaveAttribute('action')
  })
})
