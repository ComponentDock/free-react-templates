import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Menus } from './Menus'

describe('Menus', () => {
  it('renders the section title', () => {
    render(<Menus />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Featured Food Menus/ }),
    ).toBeInTheDocument()
  })

  it('renders the subtitle paragraph', () => {
    render(<Menus />)
    expect(screen.getByText(/Handpicked selections from our kitchen/)).toBeInTheDocument()
  })

  it('shows the first slide content by default', () => {
    render(<Menus />)
    expect(
      screen.getByRole('heading', { level: 3, name: 'Fresh Seafood Platter' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/ocean-fresh selection/)).toBeInTheDocument()
  })

  it('renders an image for the current slide', () => {
    render(<Menus />)
    const img = screen.getByRole('img', { name: 'Fresh Seafood Platter' })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('loading', 'lazy')
  })

  it('renders the Order Now button', () => {
    render(<Menus />)
    const orderBtn = screen.getByRole('link', { name: /Order Now/ })
    expect(orderBtn).toBeInTheDocument()
    expect(orderBtn).toHaveAttribute('href', '#contact')
  })

  it('renders slide dot buttons', () => {
    render(<Menus />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots).toHaveLength(2)
  })

  it('clicking second dot changes to second slide', async () => {
    const user = userEvent.setup()
    render(<Menus />)

    // Initially shows first slide
    expect(
      screen.getByRole('heading', { level: 3, name: 'Fresh Seafood Platter' }),
    ).toBeInTheDocument()

    // Click second dot
    const secondDot = screen.getByRole('button', { name: 'Go to slide 2' })
    await user.click(secondDot)

    // Now shows second slide
    expect(
      screen.getByRole('heading', { level: 3, name: 'Garden Harvest Salad' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Locally sourced greens/)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Garden Harvest Salad' })).toBeInTheDocument()
  })

  it('clicking first dot returns to first slide', async () => {
    const user = userEvent.setup()
    render(<Menus />)

    // Switch to second slide
    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(
      screen.getByRole('heading', { level: 3, name: 'Garden Harvest Salad' }),
    ).toBeInTheDocument()

    // Click first dot to go back
    await user.click(screen.getByRole('button', { name: 'Go to slide 1' }))
    expect(
      screen.getByRole('heading', { level: 3, name: 'Fresh Seafood Platter' }),
    ).toBeInTheDocument()
  })
})
