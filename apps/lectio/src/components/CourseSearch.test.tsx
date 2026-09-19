import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CourseSearch } from './CourseSearch'

describe('CourseSearch', () => {
  it('renders the search heading', () => {
    render(<CourseSearch />)
    expect(screen.getByRole('heading', { name: /Search your Course/i })).toBeInTheDocument()
  })

  it('renders all 5 input fields', () => {
    render(<CourseSearch />)
    for (const label of ['Course', 'Level', 'Date', 'Teacher', 'Price']) {
      expect(screen.getByPlaceholderText(label)).toBeInTheDocument()
    }
  })

  it('renders the Search button', () => {
    render(<CourseSearch />)
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument()
  })

  it('renders the search form with role=search', () => {
    render(<CourseSearch />)
    expect(screen.getByRole('search')).toBeInTheDocument()
  })

  it('prevents default form submission', () => {
    render(<CourseSearch />)
    const form = screen.getByRole('search')
    const submitEvent = new Event('submit', {
      bubbles: true,
      cancelable: true,
    })
    const preventDefault = vi.fn()
    Object.defineProperty(submitEvent, 'preventDefault', {
      value: preventDefault,
    })
    form.dispatchEvent(submitEvent)
    expect(preventDefault).toHaveBeenCalled()
  })
})
