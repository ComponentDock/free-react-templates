import { render, screen } from '@testing-library/react'
import { Video } from './Video'

describe('Video', () => {
  it('renders the video section', () => {
    render(<Video />)
    expect(screen.getByText('Watch Video')).toBeInTheDocument()
  })

  it('has a play button', () => {
    render(<Video />)
    expect(screen.getByLabelText('Play video')).toBeInTheDocument()
  })
})
