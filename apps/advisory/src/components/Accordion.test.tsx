import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Accordion } from './Accordion'

const items = [
  'Starts the automated process.',
  'The automated process starts.',
  'Automated process starts.',
  'Process the automated magic.',
]

const content =
  /The automated process starts as soon as your clothes go into the machine\. Duis cursus/

describe('Accordion', () => {
  it('renders the section heading', () => {
    render(<Accordion />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Creative solutions')
  })

  it('renders all four accordion item titles', () => {
    render(<Accordion />)
    for (const title of items) {
      expect(screen.getByRole('button', { name: title })).toBeInTheDocument()
    }
  })

  it('has the first item expanded by default', () => {
    render(<Accordion />)
    const firstBtn = screen.getByRole('button', { name: items[0] })
    expect(firstBtn).toHaveAttribute('aria-expanded', 'true')

    // Content should be visible
    expect(screen.getByText(content)).toBeInTheDocument()
  })

  it('expands a different item and collapses the first', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<Accordion />)

    await user.click(screen.getByRole('button', { name: items[1] }))

    expect(screen.getByRole('button', { name: items[0] })).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByRole('button', { name: items[1] })).toHaveAttribute('aria-expanded', 'true')
  })

  it('collapses the current item when clicked again', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<Accordion />)

    // First item is open; click it to collapse
    await user.click(screen.getByRole('button', { name: items[0] }))

    expect(screen.getByRole('button', { name: items[0] })).toHaveAttribute('aria-expanded', 'false')
    // Content should not be visible
    expect(screen.queryByText(content)).not.toBeInTheDocument()
  })

  it('renders the stats section', () => {
    render(<Accordion />)
    expect(screen.getByText('900+')).toBeInTheDocument()
    expect(screen.getByText('95%')).toBeInTheDocument()
  })
})
