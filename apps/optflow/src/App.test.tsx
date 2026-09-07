import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('sets the document title and renders the heading and three multi-selects', () => {
    render(<App />)

    expect(document.title).toBe('OptFlow — Multi-Select Snippet')

    // Heading
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Multi-Select/)

    // Three multi-select placeholders
    const placeholders = screen.getAllByText('Select Categories')
    expect(placeholders).toHaveLength(3)

    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('selects an option in the first dropdown and updates state', async () => {
    const user = userEvent.setup()
    render(<App />)

    // The first placeholder is the first dropdown
    const placeholders = screen.getAllByText('Select Categories')
    await user.click(placeholders[0]!)

    // Dropdown should open with options
    const options = screen.getAllByRole('option')
    expect(options.length).toBeGreaterThan(0)

    // Select the first option
    await user.click(options[0]!)

    // The tag should appear — no more placeholder text for first dropdown
    const remainingPlaceholders = screen.getAllByText('Select Categories')
    expect(remainingPlaceholders).toHaveLength(2)
  })

  it('selects and deselects options across independent dropdowns', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Select in first dropdown
    const firstPlaceholder = screen.getAllByText('Select Categories')[0]!
    await user.click(firstPlaceholder)
    await user.click(screen.getByRole('option', { name: 'Design' }))

    // Select in second dropdown
    const secondPlaceholder = screen.getAllByText('Select Categories')[0]!
    await user.click(secondPlaceholder)
    await user.click(screen.getByRole('option', { name: 'HTML5' }))

    // Both tags should exist independently
    expect(screen.getAllByText('Design').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('HTML5').length).toBeGreaterThanOrEqual(1)

    // Remove from first dropdown
    const removeButtons = screen.getAllByRole('button', { name: 'Remove Design' })
    await user.click(removeButtons[0]!)

    // First dropdown shows placeholder again, second still has tag, third also has placeholder
    const afterRemove = screen.getAllByText('Select Categories')
    expect(afterRemove).toHaveLength(2)
    expect(screen.getByText('HTML5')).toBeInTheDocument()
  })
})
