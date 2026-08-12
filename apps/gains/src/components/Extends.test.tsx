import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Extends } from './Extends'

describe('Extends', () => {
  it('renders the headline, copy, and video play button', async () => {
    const user = userEvent.setup()
    render(<Extends />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Make yourself stronger than your excuses',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Every rep is a conversation/)).toBeInTheDocument()

    const play = screen.getByRole('link', { name: 'Play the training video' })
    await user.click(play)
    expect(play).toHaveAttribute('href', '#courses')
  })
})
