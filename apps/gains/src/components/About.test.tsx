import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { About } from './About'

describe('About', () => {
  it('renders the section title and all four features', () => {
    render(<About />)

    expect(screen.getByText('Awesome feature')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Why you Join with us' }),
    ).toBeInTheDocument()
    for (const title of [
      'Qualified Instructor',
      'Tons of Equipment',
      'Relaxation & Meditation',
      'Happy Member',
    ]) {
      expect(screen.getByRole('heading', { level: 4, name: title })).toBeInTheDocument()
    }
  })

  it('renders a center photo with a video play link', async () => {
    const user = userEvent.setup()
    render(<About />)

    const photo = document.querySelector('img[alt="A Gains member training with a coach"]')
    expect(photo).toBeInTheDocument()

    const play = screen.getByRole('link', { name: 'Play the Gains intro video' })
    await user.click(play)
    expect(play).toHaveAttribute('href', '#courses')
  })
})
