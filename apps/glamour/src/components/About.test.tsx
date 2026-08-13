import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { About } from './About'
import { describe, expect, it } from 'vitest'

describe('About', () => {
  it('renders the heading, checklist, and video promo row', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Glamour A Model Agency/ }),
    ).toBeInTheDocument()
    for (const item of [
      'Even the all-powerful Pointing',
      'Behind the word mountains',
      'Separated they live in Bookmarksgrove',
    ]) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Play the video promo' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Watch our video promo/ })).toBeInTheDocument()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens the video dialog from the play button and closes it', async () => {
    const user = userEvent.setup()
    render(<About />)
    await user.click(screen.getByRole('button', { name: 'Play the video promo' }))

    const dialog = screen.getByRole('dialog', { name: 'Video promo' })
    expect(dialog).toBeInTheDocument()
    expect(dialog.querySelector('iframe')).toHaveAttribute('title', 'Glamour video promo')

    await user.click(screen.getByRole('button', { name: 'Close video' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens the video dialog from the text link and closes on backdrop click', async () => {
    const user = userEvent.setup()
    render(<About />)
    await user.click(screen.getByRole('button', { name: /Watch our video promo/ }))
    expect(screen.getByRole('dialog', { name: 'Video promo' })).toBeInTheDocument()

    await user.click(screen.getByRole('dialog'))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('keeps the dialog open when clicking inside the video frame', async () => {
    const user = userEvent.setup()
    render(<About />)
    await user.click(screen.getByRole('button', { name: 'Play the video promo' }))
    const dialog = screen.getByRole('dialog', { name: 'Video promo' })
    const frame = dialog.querySelector('.aspect-video')!
    await user.click(frame)
    expect(screen.getByRole('dialog', { name: 'Video promo' })).toBeInTheDocument()
  })
})
