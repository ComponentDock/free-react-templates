import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Courses } from './Courses'

describe('Courses', () => {
  it('renders section heading', () => {
    render(<Courses />)
    expect(screen.getByText('Courses')).toBeInTheDocument()
  })

  it('renders 3 course cards initially', () => {
    render(<Courses />)
    const titles = screen.getAllByText(
      /Study Law of Physics|Logo Design Course|JS Programming Language/,
    )
    expect(titles.length).toBeGreaterThanOrEqual(3)
  })

  it('navigates to next courses', async () => {
    render(<Courses />)
    await userEvent.click(screen.getByText('Next'))
    expect(screen.getByText('Prev')).toBeInTheDocument()
    expect(screen.getByText('Next')).toBeInTheDocument()
  })

  it('navigates to previous courses', async () => {
    render(<Courses />)
    await userEvent.click(screen.getByText('Next'))
    await userEvent.click(screen.getByText('Prev'))
    expect(screen.getByText('Prev')).toBeInTheDocument()
  })
})
