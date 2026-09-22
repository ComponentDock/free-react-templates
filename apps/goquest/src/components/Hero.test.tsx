import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline in Satisfy font style', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Find your Next tour/i }),
    ).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Where would you like to go?')).toBeInTheDocument()
  })

  it('renders the search input', () => {
    render(<Hero />)
    expect(screen.getByRole('textbox', { name: /destination search/i })).toBeInTheDocument()
  })

  it('renders the category dropdown', () => {
    render(<Hero />)
    expect(screen.getByRole('combobox', { name: /tour category/i })).toBeInTheDocument()
  })

  it('renders the search button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /search tours/i })).toBeInTheDocument()
  })

  it('allows typing in the search input', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const input = screen.getByRole('textbox', { name: /destination search/i })
    await user.type(input, 'Paris')
    expect(input).toHaveValue('Paris')
  })

  it('allows selecting a category', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const select = screen.getByRole('combobox', { name: /tour category/i })
    await user.selectOptions(select, 'adventure')
    expect(select).toHaveValue('adventure')
  })

  it('has a background image', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')!
    expect(section.style.backgroundImage).toContain('goquest-hero')
  })
})
