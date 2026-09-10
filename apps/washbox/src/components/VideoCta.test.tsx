import { render, screen } from '@testing-library/react'
import { VideoCta } from './VideoCta'

describe('VideoCta', () => {
  it('renders heading', () => {
    render(<VideoCta />)
    expect(screen.getByText('Your car will look as your new one')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<VideoCta />)
    expect(screen.getByText(/Watch how our professional/)).toBeInTheDocument()
  })

  it('renders play button with accessible label', () => {
    render(<VideoCta />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })
})
