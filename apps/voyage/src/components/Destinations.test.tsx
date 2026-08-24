import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Destinations } from './Destinations'

describe('Destinations', () => {
  it('renders the section heading', () => {
    render(<Destinations />)
    expect(screen.getByText(/We Provide Top Destinations/)).toBeInTheDocument()
  })

  it('renders the first 3 destination cards', () => {
    render(<Destinations />)
    expect(screen.getByText(/Enjoy the beauty of Maldives/)).toBeInTheDocument()
    expect(screen.getByText(/Explore the Swiss Alps/)).toBeInTheDocument()
    expect(screen.getByText(/Safari in Kenya/)).toBeInTheDocument()
  })

  it('does not show page 2 destinations initially', () => {
    render(<Destinations />)
    expect(screen.queryByText(/Discover Tokyo/)).not.toBeInTheDocument()
  })

  it('navigates to next page', async () => {
    const user = userEvent.setup()
    render(<Destinations />)

    const nextBtn = screen.getByRole('button', { name: /next destinations/i })
    await user.click(nextBtn)

    expect(screen.getByText(/Discover Tokyo/)).toBeInTheDocument()
    expect(screen.queryByText(/Enjoy the beauty of Maldives/)).not.toBeInTheDocument()
  })

  it('navigates to previous page', async () => {
    const user = userEvent.setup()
    render(<Destinations />)

    const nextBtn = screen.getByRole('button', { name: /next destinations/i })
    await user.click(nextBtn)
    const prevBtn = screen.getByRole('button', { name: /previous destinations/i })
    await user.click(prevBtn)

    expect(screen.getByText(/Enjoy the beauty of Maldives/)).toBeInTheDocument()
  })

  it('disables previous button on first page', () => {
    render(<Destinations />)
    const prevBtn = screen.getByRole('button', { name: /previous destinations/i })
    expect(prevBtn).toBeDisabled()
  })

  it('disables next button on last page', async () => {
    const user = userEvent.setup()
    render(<Destinations />)

    const nextBtn = screen.getByRole('button', { name: /next destinations/i })
    await user.click(nextBtn)
    expect(nextBtn).toBeDisabled()
  })

  it('renders pagination dots', () => {
    render(<Destinations />)
    const dots = screen.getAllByRole('button', { name: /go to page/i })
    expect(dots).toHaveLength(2)
  })

  it('navigates via pagination dots', async () => {
    const user = userEvent.setup()
    render(<Destinations />)

    const page2Dot = screen.getByRole('button', { name: /go to page 2/i })
    await user.click(page2Dot)

    expect(screen.getByText(/Discover Tokyo/)).toBeInTheDocument()
  })

  it('renders destination prices', () => {
    render(<Destinations />)
    expect(screen.getByText('$1,200')).toBeInTheDocument()
    expect(screen.getByText('$2,400')).toBeInTheDocument()
    expect(screen.getByText('$1,800')).toBeInTheDocument()
  })

  it('has the destinations section with correct id', () => {
    render(<Destinations />)
    const section = document.getElementById('destinations')
    expect(section).toBeInTheDocument()
  })
})
