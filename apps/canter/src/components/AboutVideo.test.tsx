import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AboutVideo } from './AboutVideo'

describe('AboutVideo', () => {
  it('shows descriptive copy and a play button with an accessible label', () => {
    render(<AboutVideo />)

    expect(
      screen.getByRole('heading', { name: /We are here to listen from you/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Play the video/ })).toBeInTheDocument()
  })

  it('toggles a video description when the play button is pressed', async () => {
    const user = userEvent.setup()
    render(<AboutVideo />)

    const play = screen.getByRole('button', { name: /Play the video/ })
    await user.click(play)

    expect(
      screen.getByText('Horse training fundamentals with our expert riders.'),
    ).toBeInTheDocument()
  })
})
