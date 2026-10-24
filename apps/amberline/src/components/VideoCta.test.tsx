import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { VideoCta } from './VideoCta'

describe('VideoCta', () => {
  it('renders the heading, four checklist rows and the learn-more button', () => {
    render(<VideoCta />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Building Dreams Into Reality Since 1982',
    )
    expect(screen.getAllByRole('listitem')).toHaveLength(4)
    expect(screen.getByRole('link', { name: /learn more about us/i })).toHaveAttribute(
      'href',
      '#about',
    )
  })

  it('opens the dialog on play, closes on Escape and loads nothing third-party first', async () => {
    const user = userEvent.setup()
    const { container } = render(<VideoCta />)
    expect(container.querySelector('iframe')).toBeNull()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Play the Amberline showreel' }))
    const dialog = screen.getByRole('dialog', { name: 'Amberline showreel' })
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(screen.getByAltText('Showreel poster frame')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close the showreel' })).toHaveFocus()
    expect(container.querySelector('iframe')).toBeNull()

    await user.keyboard('{ArrowRight}')
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the dialog through its close control', async () => {
    const user = userEvent.setup()
    render(<VideoCta />)
    await user.click(screen.getByRole('button', { name: 'Play the Amberline showreel' }))
    await user.click(screen.getByRole('button', { name: 'Close the showreel' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
