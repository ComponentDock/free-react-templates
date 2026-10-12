import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchSheet } from './SearchSheet'
import { SEARCH_CLOSE_LABEL, SEARCH_PLACEHOLDER, SEARCH_SHEET_LABEL } from '../lib/site'
import { searchInputClass, searchSheetClass } from '../lib/styles'

describe('SearchSheet — the design’s full-screen search', () => {
  it('is not on the page at all while it is down', () => {
    render(<SearchSheet isOpen={false} onClose={vi.fn()} />)

    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('covers the page, takes the focus and lets a search be typed into it', async () => {
    const user = userEvent.setup()

    render(<SearchSheet isOpen onClose={vi.fn()} />)

    const sheet = screen.getByRole('dialog', { name: SEARCH_SHEET_LABEL })

    expect(sheet.className).toBe(searchSheetClass)
    expect(sheet).toHaveAttribute('aria-modal', 'true')

    const field = screen.getByLabelText(SEARCH_PLACEHOLDER)

    expect(field).toHaveAttribute('placeholder', SEARCH_PLACEHOLDER)
    expect(field.className).toBe(searchInputClass)
    expect(document.activeElement).toBe(field)

    await user.type(field, 'the barn')

    expect(field).toHaveValue('the barn')
  })

  it('closes on its own switch', async () => {
    const onClose = vi.fn()

    render(<SearchSheet isOpen onClose={onClose} />)

    await userEvent.setup().click(screen.getByRole('button', { name: SEARCH_CLOSE_LABEL }))

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes on a submitted search, and keeps nothing that was typed', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()

    render(<SearchSheet isOpen onClose={onClose} />)

    const field = screen.getByLabelText(SEARCH_PLACEHOLDER)

    await user.type(field, 'the chapel')
    await user.keyboard('{Enter}')

    expect(onClose).toHaveBeenCalledTimes(1)
    expect(field).toHaveValue('')
  })

  it('closes on Escape, and is deaf to every other key', async () => {
    const onClose = vi.fn()

    render(<SearchSheet isOpen onClose={onClose} />)

    await userEvent.setup().keyboard('{Escape}')

    expect(onClose).toHaveBeenCalledTimes(1)

    await userEvent.setup().keyboard('a')

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('listens for the key only while it is up', async () => {
    const onClose = vi.fn()
    const { rerender } = render(<SearchSheet isOpen onClose={onClose} />)

    rerender(<SearchSheet isOpen={false} onClose={onClose} />)

    await userEvent.setup().keyboard('{Escape}')

    expect(onClose).not.toHaveBeenCalled()
  })
})
