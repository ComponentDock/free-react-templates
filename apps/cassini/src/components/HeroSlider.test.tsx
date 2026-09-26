import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import HeroSlider from './HeroSlider'

describe('HeroSlider', () => {
  it('renders the initial slide content', () => {
    render(<HeroSlider />)
    expect(screen.getByText('Photo Studio')).toBeInTheDocument()
    expect(screen.getByText('Nature')).toBeInTheDocument()
    expect(screen.getByText('See More')).toBeInTheDocument()
  })

  it('navigates to next slide on arrow click', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByLabelText('Next slide'))
    expect(screen.getByText('Photo Studio')).toBeInTheDocument()
    expect(screen.getByText('Nature')).toBeInTheDocument()
  })

  it('navigates to previous slide on arrow click', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByLabelText('Previous slide'))
    expect(screen.getByText('Photo Studio')).toBeInTheDocument()
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByLabelText('Go to slide 2'))
    expect(screen.getByText('Photo Studio')).toBeInTheDocument()
  })
})
