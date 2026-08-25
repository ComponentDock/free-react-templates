import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { VideoTour } from './VideoTour'

describe('VideoTour', () => {
  it('renders heading', () => {
    render(<VideoTour />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Take A Tour')
  })

  it('renders play button', () => {
    render(<VideoTour />)
    expect(screen.getByRole('button', { name: 'Play video tour' })).toBeInTheDocument()
  })

  it('shows video message when play is clicked', async () => {
    const user = userEvent.setup()
    render(<VideoTour />)
    await user.click(screen.getByRole('button', { name: 'Play video tour' }))
    expect(screen.getByText('Video player would open here')).toBeInTheDocument()
  })

  it('has tour section id', () => {
    const { container } = render(<VideoTour />)
    expect(container.querySelector('#tour')).toBeInTheDocument()
  })
})
