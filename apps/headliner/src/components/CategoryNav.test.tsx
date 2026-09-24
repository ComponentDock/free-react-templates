import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CategoryNav } from './CategoryNav'

describe('CategoryNav', () => {
  it('renders all category links on desktop', () => {
    render(<CategoryNav />)
    const categories = [
      'Lifestyle',
      'Business',
      'Fashion',
      'Design',
      'Health',
      'Harmful',
      'Technology',
      'Travel',
      'Food',
      'Creative',
    ]
    for (const cat of categories) {
      expect(screen.getAllByText(cat).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<CategoryNav />)
    const toggle = screen.getByLabelText('Toggle category menu')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders the categories label', () => {
    render(<CategoryNav />)
    expect(screen.getByText('Categories')).toBeInTheDocument()
  })
})
