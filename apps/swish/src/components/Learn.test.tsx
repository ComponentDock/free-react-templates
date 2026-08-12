import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Learn } from './Learn'

describe('Learn', () => {
  it('renders the tutorial section with heading and play button', () => {
    render(<Learn />)

    expect(screen.getByText('free tutorial')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Learn About Basketball' })).toBeInTheDocument()
    const play = screen.getByRole('button', { name: 'Play video' })
    expect(play).toHaveAttribute('aria-pressed', 'false')
  })

  it('toggles the playing state on click', async () => {
    const user = userEvent.setup()
    render(<Learn />)

    const play = screen.getByRole('button', { name: 'Play video' })
    await user.click(play)
    expect(screen.getByRole('button', { name: 'Pause video' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Pause video' }))
    expect(screen.getByRole('button', { name: 'Play video' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
  })
})
