import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the section heading and filters', () => {
    render(<Projects />)

    expect(screen.getByRole('heading', { level: 2, name: 'Projects' })).toBeInTheDocument()
    for (const filter of ['All', 'Restaurations', 'Buildings', 'Apartments']) {
      expect(screen.getByRole('button', { name: filter })).toBeInTheDocument()
    }
  })

  it('renders project cards with See Project links', () => {
    render(<Projects />)

    expect(screen.getAllByRole('link', { name: 'See Project' }).length).toBeGreaterThanOrEqual(3)
    expect(
      screen.getByRole('heading', { level: 3, name: /Biggest Restaurations/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /Office Building/ })).toBeInTheDocument()
  })

  it('filters projects by category', async () => {
    const user = userEvent.setup()
    render(<Projects />)

    expect(screen.getAllByRole('listitem').length).toBeGreaterThanOrEqual(4)

    await user.click(screen.getByRole('button', { name: 'Buildings' }))

    const visible = screen
      .getAllByRole('listitem')
      .filter((item) => !item.classList.contains('hidden'))
    expect(visible.length).toBeGreaterThanOrEqual(1)
    for (const item of visible) {
      expect(
        within(item).queryByRole('heading', { level: 3, name: /Restaurations/ }),
      ).not.toBeInTheDocument()
    }
  })
})
