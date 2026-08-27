import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ServicesCarousel } from './ServicesCarousel'

describe('ServicesCarousel', () => {
  it('renders the section heading', () => {
    render(<ServicesCarousel />)
    expect(screen.getByText('Stay Healthy')).toBeInTheDocument()
    expect(screen.getByText('Get A Perfect Body')).toBeInTheDocument()
  })

  it('renders first 3 feature cards by default', () => {
    render(<ServicesCarousel />)
    expect(screen.getByText('Be Fit')).toBeInTheDocument()
    expect(screen.getByText('Join Club')).toBeInTheDocument()
    expect(screen.getByText('Gym Fitness')).toBeInTheDocument()
    // Page 2 items not visible
    expect(screen.queryByText('Body Warmup')).not.toBeInTheDocument()
  })

  it('navigates to next page', async () => {
    const user = userEvent.setup()
    render(<ServicesCarousel />)
    const nextBtn = screen.getByLabelText('Next')
    await user.click(nextBtn)
    expect(screen.getByText('Body Warmup')).toBeInTheDocument()
  })

  it('navigates to previous page', async () => {
    const user = userEvent.setup()
    render(<ServicesCarousel />)
    const nextBtn = screen.getByLabelText('Next')
    await user.click(nextBtn)
    const prevBtn = screen.getByLabelText('Previous')
    await user.click(prevBtn)
    expect(screen.getByText('Be Fit')).toBeInTheDocument()
  })

  it('disables previous button on first page', () => {
    render(<ServicesCarousel />)
    expect(screen.getByLabelText('Previous')).toBeDisabled()
  })

  it('disables next button on last page', async () => {
    const user = userEvent.setup()
    render(<ServicesCarousel />)
    // Go to last page
    const nextBtn = screen.getByLabelText('Next')
    await user.click(nextBtn)
    expect(nextBtn).toBeDisabled()
  })

  it('navigates via dot buttons', async () => {
    const user = userEvent.setup()
    render(<ServicesCarousel />)
    const dot = screen.getByLabelText('Go to slide 2')
    await user.click(dot)
    expect(screen.getByText('Body Warmup')).toBeInTheDocument()
  })
})
