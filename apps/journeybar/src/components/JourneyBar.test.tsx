import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { JourneyBar, HotelsForm, CarForm, FlightForm, Footer } from './JourneyBar'

describe('JourneyBar', () => {
  it('renders with Hotels tab active by default', () => {
    render(<JourneyBar />)
    expect(screen.getByRole('tab', { name: /hotels/i })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel', { name: /hotels/i })).toBeInTheDocument()
  })

  it('shows destination input for hotels', () => {
    render(<JourneyBar />)
    expect(screen.getByLabelText(/destination/i)).toBeInTheDocument()
  })

  it('shows check-in and check-out dates for hotels', () => {
    render(<JourneyBar />)
    expect(screen.getByLabelText(/check-in date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/check-out date/i)).toBeInTheDocument()
  })

  it('shows guests dropdown for hotels', () => {
    render(<JourneyBar />)
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument()
  })

  it('renders a search button', () => {
    render(<JourneyBar />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('switches to Car tab on click', async () => {
    const user = userEvent.setup()
    render(<JourneyBar />)

    await user.click(screen.getByRole('tab', { name: /car/i }))

    expect(screen.getByRole('tab', { name: /car/i })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: /hotels/i })).toHaveAttribute('aria-selected', 'false')
    expect(screen.getByLabelText(/pick-up location/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/pick-up date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/drop-off date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/car type/i)).toBeInTheDocument()
  })

  it('switches to Flight tab on click', async () => {
    const user = userEvent.setup()
    render(<JourneyBar />)

    await user.click(screen.getByRole('tab', { name: /flight/i }))

    expect(screen.getByRole('tab', { name: /flight/i })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByLabelText(/departure city/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/destination city/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/departure date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/return date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/travel class/i)).toBeInTheDocument()
  })

  it('switches back to Hotels tab from Car', async () => {
    const user = userEvent.setup()
    render(<JourneyBar />)

    await user.click(screen.getByRole('tab', { name: /car/i }))
    await user.click(screen.getByRole('tab', { name: /hotels/i }))

    expect(screen.getByRole('tab', { name: /hotels/i })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByLabelText(/destination/i)).toBeInTheDocument()
  })

  it('hides inactive tab panels', async () => {
    const user = userEvent.setup()
    render(<JourneyBar />)

    await user.click(screen.getByRole('tab', { name: /car/i }))

    expect(screen.queryByLabelText(/destination/i)).not.toBeInTheDocument()
    expect(screen.queryByLabelText(/departure city/i)).not.toBeInTheDocument()
  })

  it('accepts a custom className', () => {
    const { container } = render(<JourneyBar className="custom-class" />)
    expect(container.firstElementChild).toHaveClass('custom-class')
  })
})

describe('HotelsForm', () => {
  it('renders all fields', () => {
    render(<HotelsForm />)
    expect(screen.getByLabelText(/destination/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/check-in date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/check-out date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument()
  })

  it('has correct default value for guests', () => {
    render(<HotelsForm />)
    const select = screen.getByLabelText(/number of guests/i) as HTMLSelectElement
    expect(select.value).toBe('')
  })
})

describe('CarForm', () => {
  it('renders all fields', () => {
    render(<CarForm />)
    expect(screen.getByLabelText(/pick-up location/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/pick-up date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/drop-off date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/car type/i)).toBeInTheDocument()
  })

  it('has correct default value for car type', () => {
    render(<CarForm />)
    const select = screen.getByLabelText(/car type/i) as HTMLSelectElement
    expect(select.value).toBe('')
  })
})

describe('FlightForm', () => {
  it('renders all fields', () => {
    render(<FlightForm />)
    expect(screen.getByLabelText(/departure city/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/destination city/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/departure date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/return date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/travel class/i)).toBeInTheDocument()
  })

  it('has correct default value for class', () => {
    render(<FlightForm />)
    const select = screen.getByLabelText(/travel class/i) as HTMLSelectElement
    expect(select.value).toBe('')
  })
})

describe('Footer', () => {
  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
