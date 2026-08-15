import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the label, heading, copy and About Us button on the dark band', () => {
    render(<About />)

    const section = screen.getByRole('region', { name: 'About us' })
    expect(within(section).getAllByText('About Us')).toHaveLength(2)
    expect(within(section).getByText('About Us', { selector: 'span' })).toBeInTheDocument()
    expect(
      within(section).getByRole('heading', { level: 2, name: 'Empowering individuals' }),
    ).toBeInTheDocument()
    expect(within(section).getByText(/Efficiently unleash cross-media tour/)).toBeInTheDocument()

    const button = within(section).getByRole('link', { name: 'About Us' })
    expect(button).toHaveAttribute('href', '#contact')
  })
})
