import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { About } from './About'

describe('About', () => {
  it('renders section heading and description', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText(/We Are The Reason For Change/)).toBeInTheDocument()
    expect(screen.getByText(/mission is to protect/)).toBeInTheDocument()
  })

  it('renders image and play button', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /environmental conservation/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })

  it('play button is clickable', async () => {
    const user = userEvent.setup()
    render(<About />)
    const playBtn = screen.getByRole('button', { name: /play video/i })
    await user.click(playBtn)
    // Button remains in the DOM after click
    expect(playBtn).toBeInTheDocument()
  })
})
