import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { OurMenu } from './OurMenu'

describe('OurMenu', () => {
  it('renders the section heading', () => {
    render(<OurMenu />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Menu')
  })

  it('renders the Explore subtitle', () => {
    render(<OurMenu />)
    expect(screen.getByText('Explore')).toBeInTheDocument()
  })

  it('renders Starter tab as default active', () => {
    render(<OurMenu />)
    expect(screen.getByText('Bruschetta')).toBeInTheDocument()
  })

  it('switches to Main Courses tab', async () => {
    const user = userEvent.setup()
    render(<OurMenu />)

    await user.click(screen.getByText('Main Courses'))
    expect(screen.getByText('Margherita Pizza')).toBeInTheDocument()
    expect(screen.queryByText('Bruschetta')).not.toBeInTheDocument()
  })

  it('switches to Desserts tab', async () => {
    const user = userEvent.setup()
    render(<OurMenu />)

    await user.click(screen.getByText('Desserts'))
    expect(screen.getByText('Honey Chocolate Pie')).toBeInTheDocument()
    expect(screen.getByText('Tiramisu')).toBeInTheDocument()
    expect(screen.queryByText('Bruschetta')).not.toBeInTheDocument()
  })

  it('renders menu item prices', async () => {
    const user = userEvent.setup()
    render(<OurMenu />)

    expect(screen.getByText('$8.99')).toBeInTheDocument()

    await user.click(screen.getByText('Main Courses'))
    expect(screen.getByText('$14.99')).toBeInTheDocument()

    await user.click(screen.getByText('Desserts'))
    expect(screen.getByText('$7.99')).toBeInTheDocument()
  })
})
