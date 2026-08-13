import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Departments } from './Departments'
import { departments } from '../data'

describe('Departments', () => {
  it('renders the title, six tabs and the shared content pane', () => {
    render(<Departments />)
    expect(screen.getByText(departments.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: departments.title })).toBeInTheDocument()

    const tabs = screen.getAllByRole('tab')
    expect(tabs).toHaveLength(6)
    departments.tabs.forEach((tab, index) => {
      expect(tabs[index]).toHaveTextContent(tab.label)
    })

    expect(screen.getByRole('heading', { name: departments.pane.title })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: new RegExp(departments.pane.cta) })).toHaveAttribute(
      'href',
      departments.pane.href,
    )
    expect(screen.getByAltText(departments.pane.alt)).toBeInTheDocument()
  })

  it('starts with the first tab active and switches on click', () => {
    render(<Departments />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[0]).toHaveClass('bg-[linear-gradient(0deg,#24c0f1,#4c9afe)]')
    expect(tabs[1]).toHaveAttribute('aria-selected', 'false')

    fireEvent.click(tabs[2] as HTMLElement)
    expect(tabs[2]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[2]).toHaveClass('bg-[linear-gradient(0deg,#24c0f1,#4c9afe)]')
    expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
    // The pane content is shared — it stays rendered after switching tabs.
    expect(screen.getByRole('heading', { name: departments.pane.title })).toBeInTheDocument()
  })
})
