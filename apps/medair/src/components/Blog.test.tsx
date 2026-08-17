import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the Recent Blog heading and three post cards', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: 'Recent Blog' })).toBeInTheDocument()
    expect(screen.getByText('Our Blog')).toBeInTheDocument()

    const titles = [
      'How Much Do You Really Need To Eat Each Day?',
      'Five Easy Morning Habits For Lasting Energy',
      'Meal Prep Without The Chaos: A Beginner Guide',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Continue Reading' }).length).toBe(3)
    expect(document.querySelectorAll('article img').length).toBe(3)
  })

  it('shows green date blocks, meta, and blurbs', () => {
    render(<Blog />)

    expect(screen.getAllByText('13').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Jan')).toBeInTheDocument()
    expect(screen.getAllByText('Admin').length).toBe(3)
    expect(screen.getAllByText('3 Comments').length).toBe(3)

    const dateBlock = document.querySelector('.bg-brand')
    expect(dateBlock?.textContent).toContain('13')
    expect(dateBlock?.textContent).toContain('Jan')
  })
})
