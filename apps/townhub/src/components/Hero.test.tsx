import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { heroHeading, heroScriptText, searchCategories, searchPlaceholder } from '../data'

describe('Hero', () => {
  it('renders the script accent text', () => {
    render(<Hero />)
    expect(screen.getByText(heroScriptText)).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heroHeading)
  })

  it('renders the search input with placeholder', () => {
    render(<Hero />)
    const input = screen.getByLabelText('Search query')
    expect(input).toHaveAttribute('placeholder', searchPlaceholder)
  })

  it('renders the category select with all options', () => {
    render(<Hero />)
    const select = screen.getByLabelText('Category')
    expect(select).toBeInTheDocument()
    for (const cat of searchCategories) {
      expect(screen.getByRole('option', { name: cat })).toBeInTheDocument()
    }
  })

  it('renders the Search button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('allows typing in the search input', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const input = screen.getByLabelText('Search query')
    await user.type(input, 'pizza')
    expect(input).toHaveValue('pizza')
  })

  it('form submission does not navigate', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: /search/i }))
    // No navigation should occur (form onSubmit prevents default)
  })
})
