import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchOverlay } from './SearchOverlay'
import { closeSearchLabel, searchHint, searchLabel } from '../data'

describe('SearchOverlay', () => {
  it('renders nothing while closed', () => {
    render(<SearchOverlay open={false} onClose={() => {}} />)
    expect(screen.queryByRole('search')).not.toBeInTheDocument()
  })

  it('renders the giant input with hint and focuses it while open', () => {
    render(<SearchOverlay open onClose={() => {}} />)
    const region = screen.getByRole('search')
    expect(region).toBeInTheDocument()

    const input = screen.getByRole('searchbox', { name: searchLabel })
    expect(input).toHaveFocus()
    expect(screen.getByText(searchHint)).toBeInTheDocument()
  })

  it('closes via the close button', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SearchOverlay open onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: closeSearchLabel }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes on Escape and swallows form submission', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SearchOverlay open onClose={onClose} />)

    await user.type(screen.getByRole('searchbox', { name: searchLabel }), 'coffee{Enter}')
    expect(onClose).not.toHaveBeenCalled()

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
