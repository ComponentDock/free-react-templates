import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections in the source order', () => {
    render(<App />)

    expect(document.title).toMatch(/Edify/)

    const headings = screen
      .getAllByRole('heading', { level: 2 })
      .map((node) => node.textContent?.trim())

    expect(headings).toEqual([
      'Our featured courses',
      'Learn new skills online with top educators',
      'Explore top subjects',
      'Learner outcomes on courses you will take',
      'Community experts',
      'Take the next step toward your personal and professional goals with us.',
    ])

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 })).toHaveTextContent(
      'Online learning platform',
    )

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('heading', { name: 'Our solutions' })).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: 'Support' })).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { name: 'Company' })).toBeInTheDocument()
  })
})
