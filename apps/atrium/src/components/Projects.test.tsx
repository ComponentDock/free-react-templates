import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the heading and all four projects with View More links', () => {
    render(<Projects />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Our Latest Projects' }),
    ).toBeInTheDocument()

    const expected = [
      { name: 'Abahoni Building', location: 'Dubai, UAE' },
      { name: 'MR Kholifa Tower', location: 'Dhaka, Bangladesh' },
      { name: 'Galoni Plan & Design', location: 'Dubai, UAE' },
      { name: 'Hiclick Mirror Design', location: 'Dhaka, Bangladesh' },
    ]

    for (const project of expected) {
      const card = screen.getByText(project.name).closest('div')
      expect(card).not.toBeNull()
      expect(within(card as HTMLElement).getByText(project.location)).toBeInTheDocument()
      expect(
        within(card as HTMLElement).getByRole('link', { name: 'View More' }),
      ).toBeInTheDocument()
    }

    expect(screen.getAllByRole('link', { name: 'View More' })).toHaveLength(4)
  })
})
