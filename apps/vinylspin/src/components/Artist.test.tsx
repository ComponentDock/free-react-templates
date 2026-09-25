import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Artist } from './Artist'

describe('Artist', () => {
  it('renders The Artist heading', () => {
    render(<Artist />)
    expect(screen.getByText('The Artist')).toBeInTheDocument()
  })

  it('renders artist image', () => {
    render(<Artist />)
    expect(screen.getByAltText('Artist portrait')).toBeInTheDocument()
  })

  it('renders biography paragraphs', () => {
    render(<Artist />)
    expect(screen.getByText(/In vitae nisi aliquam/)).toBeInTheDocument()
    expect(screen.getByText(/Integer sed facilisis eros/)).toBeInTheDocument()
  })

  it('renders artist signature', () => {
    render(<Artist />)
    expect(screen.getByText('Maria Smith')).toBeInTheDocument()
  })

  it('play button is clickable', async () => {
    const user = userEvent.setup()
    render(<Artist />)
    const playBtn = screen.getByRole('button', { name: /play/i })
    await user.click(playBtn)
    expect(playBtn).toBeInTheDocument()
  })
})
