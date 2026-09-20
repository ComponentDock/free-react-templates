import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FeaturedCourses } from './FeaturedCourses'

describe('FeaturedCourses', () => {
  it('renders heading and filter tabs', () => {
    render(<FeaturedCourses />)

    expect(screen.getByText('Featured Courses')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Finance' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Design' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Web Development' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Photography' })).toBeInTheDocument()
  })

  it('shows all 8 courses by default', () => {
    render(<FeaturedCourses />)

    expect(screen.getByText('Financial Planning 101')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Design Principles')).toBeInTheDocument()
    expect(screen.getByText('Full Stack Web Dev')).toBeInTheDocument()
    expect(screen.getByText('Portrait Photography')).toBeInTheDocument()
    expect(screen.getByText('Investment Strategies')).toBeInTheDocument()
    expect(screen.getByText('Brand Identity Design')).toBeInTheDocument()
    expect(screen.getByText('React & TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Landscape Photography')).toBeInTheDocument()
  })

  it('filters courses by Finance category', async () => {
    const user = userEvent.setup()
    render(<FeaturedCourses />)

    await user.click(screen.getByRole('button', { name: 'Finance' }))

    expect(screen.getByText('Financial Planning 101')).toBeInTheDocument()
    expect(screen.getByText('Investment Strategies')).toBeInTheDocument()
    expect(screen.queryByText('UI/UX Design Principles')).not.toBeInTheDocument()
    expect(screen.queryByText('Full Stack Web Dev')).not.toBeInTheDocument()
  })

  it('filters courses by Design category', async () => {
    const user = userEvent.setup()
    render(<FeaturedCourses />)

    await user.click(screen.getByRole('button', { name: 'Design' }))

    expect(screen.getByText('UI/UX Design Principles')).toBeInTheDocument()
    expect(screen.getByText('Brand Identity Design')).toBeInTheDocument()
    expect(screen.queryByText('Financial Planning 101')).not.toBeInTheDocument()
  })

  it('shows all courses when All tab is clicked after filtering', async () => {
    const user = userEvent.setup()
    render(<FeaturedCourses />)

    await user.click(screen.getByRole('button', { name: 'Finance' }))
    await user.click(screen.getByRole('button', { name: 'All' }))

    expect(screen.getByText('Financial Planning 101')).toBeInTheDocument()
    expect(screen.getByText('Full Stack Web Dev')).toBeInTheDocument()
  })

  it('displays price badges on course cards', () => {
    render(<FeaturedCourses />)

    expect(screen.getAllByText('$49')).toHaveLength(2)
    expect(screen.getByText('$59')).toBeInTheDocument()
    expect(screen.getByText('$79')).toBeInTheDocument()
  })

  it('displays student counts', () => {
    render(<FeaturedCourses />)

    expect(screen.getByText('234')).toBeInTheDocument()
    expect(screen.getByText('189')).toBeInTheDocument()
  })
})
