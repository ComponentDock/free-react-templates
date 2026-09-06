import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Dropdown } from './Dropdown'

const categories = [
  {
    name: 'Electronics',
    items: ['Phones', 'Laptops', 'Tablets', 'Accessories'],
  },
  {
    name: 'Clothing',
    items: ['Men', 'Women', 'Kids', 'Shoes'],
  },
  {
    name: 'Home & Garden',
    items: ['Furniture', 'Lighting', 'Kitchen', 'Outdoor'],
  },
]

describe('Dropdown', () => {
  it('renders the trigger button', () => {
    render(<Dropdown categories={categories} />)
    expect(screen.getByRole('button', { name: /select category/i })).toBeInTheDocument()
  })

  it('opens the menu when trigger is clicked', async () => {
    const user = userEvent.setup()
    render(<Dropdown categories={categories} />)

    await user.click(screen.getByRole('button', { name: /select category/i }))

    expect(screen.getByRole('menu')).toBeInTheDocument()
    expect(screen.getByText('Electronics')).toBeInTheDocument()
    expect(screen.getByText('Clothing')).toBeInTheDocument()
    expect(screen.getByText('Home & Garden')).toBeInTheDocument()
  })

  it('closes the menu when trigger is clicked again', async () => {
    const user = userEvent.setup()
    render(<Dropdown categories={categories} />)

    const trigger = screen.getByRole('button', { name: /select category/i })
    await user.click(trigger)
    expect(screen.getByRole('menu')).toBeInTheDocument()

    await user.click(trigger)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('closes the menu when clicking outside', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <Dropdown categories={categories} />
        <button>Outside</button>
      </div>,
    )

    await user.click(screen.getByRole('button', { name: /select category/i }))
    expect(screen.getByRole('menu')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /outside/i }))
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('closes the menu when Escape is pressed', async () => {
    const user = userEvent.setup()
    render(<Dropdown categories={categories} />)

    await user.click(screen.getByRole('button', { name: /select category/i }))
    expect(screen.getByRole('menu')).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })

  it('does not close the menu when a non-Escape key is pressed', async () => {
    const user = userEvent.setup()
    render(<Dropdown categories={categories} />)

    await user.click(screen.getByRole('button', { name: /select category/i }))
    expect(screen.getByRole('menu')).toBeInTheDocument()

    await user.keyboard('{ArrowDown}')
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })

  it('displays sub-category items for each category', async () => {
    const user = userEvent.setup()
    render(<Dropdown categories={categories} />)

    await user.click(screen.getByRole('button', { name: /select category/i }))

    expect(screen.getByText('Phones')).toBeInTheDocument()
    expect(screen.getByText('Laptops')).toBeInTheDocument()
    expect(screen.getByText('Men')).toBeInTheDocument()
    expect(screen.getByText('Women')).toBeInTheDocument()
    expect(screen.getByText('Furniture')).toBeInTheDocument()
    expect(screen.getByText('Lighting')).toBeInTheDocument()
  })

  it('renders sub-category items as links', async () => {
    const user = userEvent.setup()
    render(<Dropdown categories={categories} />)

    await user.click(screen.getByRole('button', { name: /select category/i }))

    const phonesLink = screen.getByText('Phones')
    expect(phonesLink.closest('a')).toHaveAttribute('href', '#')
  })
})
