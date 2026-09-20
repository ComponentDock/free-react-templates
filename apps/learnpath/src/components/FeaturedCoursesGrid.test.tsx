import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FeaturedCoursesGrid } from './FeaturedCoursesGrid'

describe('FeaturedCoursesGrid', () => {
  it('renders heading and filter tabs', () => {
    render(<FeaturedCoursesGrid />)

    expect(screen.getByRole('heading', { name: 'Featured Courses' })).toBeInTheDocument()

    for (const tab of ['All', 'Business', 'Design', 'Web Development', 'Photography']) {
      expect(screen.getByRole('button', { name: tab })).toBeInTheDocument()
    }
  })

  it('renders six course cards', () => {
    render(<FeaturedCoursesGrid />)

    expect(screen.getByRole('heading', { name: 'Digital Marketing Course' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Web Development Bootcamp' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Photography Masterclass' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Business Strategy' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'UI/UX Design Fundamentals' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Advanced JavaScript' })).toBeInTheDocument()
  })

  it('renders pricing for courses', () => {
    render(<FeaturedCoursesGrid />)

    expect(screen.getByText('$35')).toBeInTheDocument()
    expect(screen.getByText('$49')).toBeInTheDocument()
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('$42')).toBeInTheDocument()

    const freeLabels = screen.getAllByText('Free')
    expect(freeLabels.length).toBeGreaterThanOrEqual(2)
  })

  it('renders view all courses button', () => {
    render(<FeaturedCoursesGrid />)

    expect(screen.getByRole('link', { name: 'view all courses' })).toHaveAttribute(
      'href',
      '#courses',
    )
  })

  it('renders course images', () => {
    render(<FeaturedCoursesGrid />)

    expect(screen.getByAltText('Digital Marketing Course')).toBeInTheDocument()
    expect(screen.getByAltText('Advanced JavaScript')).toBeInTheDocument()
  })

  it('allows clicking different filter tabs', async () => {
    const user = userEvent.setup()
    render(<FeaturedCoursesGrid />)

    const businessTab = screen.getByRole('button', { name: 'Business' })
    await user.click(businessTab)
    // Tab should be clickable without error
    expect(businessTab).toBeInTheDocument()
  })
})
