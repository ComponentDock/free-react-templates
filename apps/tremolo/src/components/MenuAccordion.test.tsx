import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MenuAccordion } from './MenuAccordion'

describe('MenuAccordion', () => {
  it('renders the section heading and all category headers', () => {
    render(<MenuAccordion />)
    expect(screen.getByRole('heading', { name: 'Our Menu' })).toBeInTheDocument()
    for (const label of ['Starters', 'Main Courses', 'Specialties', 'Desserts', 'Beverages']) {
      expect(screen.getByRole('button', { name: label })).toBeInTheDocument()
    }
  })

  it('expands the first category by default', () => {
    render(<MenuAccordion />)
    expect(screen.getByText('Bruschetta al Pomodoro')).toBeInTheDocument()
    expect(screen.getByText('$8.50')).toBeInTheDocument()
  })

  it('collapses the current category when clicked again', async () => {
    const user = userEvent.setup()
    render(<MenuAccordion />)
    const startersBtn = screen.getByRole('button', { name: 'Starters' })
    await user.click(startersBtn)
    expect(screen.queryByText('Bruschetta al Pomodoro')).not.toBeInTheDocument()
  })

  it('opens a different category when its header is clicked', async () => {
    const user = userEvent.setup()
    render(<MenuAccordion />)
    const mainsBtn = screen.getByRole('button', { name: 'Main Courses' })
    await user.click(mainsBtn)
    expect(screen.getByText('Grilled Ribeye Steak')).toBeInTheDocument()
    expect(screen.queryByText('Bruschetta al Pomodoro')).not.toBeInTheDocument()
  })

  it('shows dietary badges for menu items that have them', () => {
    render(<MenuAccordion />)
    expect(screen.getByText('Vegetarian')).toBeInTheDocument()
    expect(screen.getByText("Chef's Special")).toBeInTheDocument()
  })

  it('renders menu item images', () => {
    render(<MenuAccordion />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThan(0)
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })

  it('sets aria-expanded correctly on category buttons', async () => {
    const user = userEvent.setup()
    render(<MenuAccordion />)
    const startersBtn = screen.getByRole('button', { name: 'Starters' })
    expect(startersBtn).toHaveAttribute('aria-expanded', 'true')
    await user.click(startersBtn)
    expect(startersBtn).toHaveAttribute('aria-expanded', 'false')
  })
})
