import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { VideoCta } from './VideoCta'

describe('VideoCta', () => {
  it('renders the rounded band with the play control and heading', () => {
    const { container } = render(<VideoCta />)

    const band = container.querySelector('#video > div > div')
    expect(band).toHaveStyle({
      backgroundImage: 'url(https://picsum.photos/seed/wanderbug-video-bg/1440/700)',
    })
    expect(screen.getByRole('heading', { level: 3, name: 'Watch our last tour' })).toHaveClass(
      'text-white',
    )
    expect(screen.getByRole('button', { name: 'Play our last tour film' })).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('acknowledges the play control in place instead of opening a popup', async () => {
    const user = userEvent.setup()
    render(<VideoCta />)

    await user.click(screen.getByRole('button', { name: 'Play our last tour film' }))
    expect(screen.getByRole('status')).toHaveTextContent(
      'The tour film is being edited — check back soon.',
    )
  })
})
