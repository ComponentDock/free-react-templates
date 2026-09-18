import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ChooseUs } from './ChooseUs'

describe('ChooseUs', () => {
  it('renders the heading', () => {
    render(<ChooseUs />)
    expect(screen.getByText('Why People Choose Us')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<ChooseUs />)
    expect(screen.getByText(/commitment to quality/)).toBeInTheDocument()
  })

  it('renders the About Us button', () => {
    render(<ChooseUs />)
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
  })

  it('renders the video placeholder with play button', () => {
    render(<ChooseUs />)
    expect(screen.getByLabelText('Play video')).toBeInTheDocument()
  })

  it('play button is clickable', async () => {
    const user = userEvent.setup()
    render(<ChooseUs />)
    const playBtn = screen.getByLabelText('Play video')
    await user.click(playBtn)
    // play button is still in the document (no navigation)
    expect(playBtn).toBeInTheDocument()
  })

  it('has light gray section background', () => {
    const { container } = render(<ChooseUs />)
    const section = container.querySelector('.bg-section-light')
    expect(section).toBeInTheDocument()
  })
})
