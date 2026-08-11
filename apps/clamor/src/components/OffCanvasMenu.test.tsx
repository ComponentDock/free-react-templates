import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { OffCanvasMenu } from './OffCanvasMenu'
import {
  aboutBlurb,
  aboutTitle,
  authorName,
  closeLabel,
  instagramTitle,
  menuInstagramLabel,
  menuLinks,
  navLabel,
  searchButtonLabel,
  searchLabel,
  searchPlaceholder,
} from '../data'

describe('OffCanvasMenu', () => {
  it('renders nothing when closed', () => {
    const { container } = render(<OffCanvasMenu open={false} onClose={vi.fn()} />)
    expect(container).toBeEmptyDOMElement()
  })

  it('renders the search form, menu links, about block, and instagram tiles', () => {
    render(<OffCanvasMenu open onClose={vi.fn()} />)

    expect(screen.getByRole('navigation', { name: navLabel })).toBeInTheDocument()

    const search = screen.getByLabelText(searchLabel)
    expect(search).toHaveAttribute('placeholder', searchPlaceholder)
    expect(screen.getByRole('button', { name: searchButtonLabel })).toBeInTheDocument()

    for (const link of menuLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('aria-current', 'page')

    expect(screen.getByRole('heading', { name: aboutTitle })).toBeInTheDocument()
    expect(screen.getByText(authorName)).toBeInTheDocument()
    expect(screen.getByText(aboutBlurb)).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: instagramTitle })).toBeInTheDocument()
    for (let index = 0; index < 4; index += 1) {
      expect(screen.getByAltText(menuInstagramLabel(index))).toBeInTheDocument()
    }
  })

  it('submits the search form without navigating away', async () => {
    const user = userEvent.setup()
    render(<OffCanvasMenu open onClose={vi.fn()} />)

    const search = screen.getByLabelText(searchLabel)
    await user.type(search, 'typography')
    await user.click(screen.getByRole('button', { name: searchButtonLabel }))

    expect(search).toHaveValue('typography')
  })

  it('calls onClose when the close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<OffCanvasMenu open onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: closeLabel }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes the menu when a menu link is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<OffCanvasMenu open onClose={onClose} />)

    const link = screen.getByRole('link', { name: 'Contact me' })
    // Neutralize jsdom hash-navigation on the in-page anchor before clicking
    // (native target listeners run before React's delegated handler).
    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)

    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
