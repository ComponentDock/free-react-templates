import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Catalogue } from './Catalogue'

describe('Catalogue', () => {
  it('renders the heading, style tabs, and a View Gallery link', () => {
    render(<Catalogue />)

    expect(screen.getByRole('heading', { name: 'Select Your Style' })).toBeInTheDocument()
    for (const tab of ['Shaving', 'Hair Cutting', 'Styling', 'Coloring']) {
      expect(screen.getByRole('tab', { name: tab })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'View Gallery...' })).toHaveAttribute(
      'href',
      '#barbers',
    )
  })

  it('shows the default Shaving styles', () => {
    render(<Catalogue />)
    expect(screen.getByRole('tab', { name: 'Shaving' })).toHaveAttribute('aria-selected', 'true')
    for (const style of ['Classic Wet Shave', 'Hot Towel Shave', 'Royal Shave', 'Beard Line Up']) {
      expect(screen.getByText(style)).toBeInTheDocument()
    }
  })

  it('switches the style list when another tab is selected', async () => {
    const user = userEvent.setup()
    render(<Catalogue />)

    await user.click(screen.getByRole('tab', { name: 'Hair Cutting' }))
    expect(screen.getByRole('tab', { name: 'Hair Cutting' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.queryByText('Classic Wet Shave')).not.toBeInTheDocument()
    for (const style of ['Classic Cut', 'Modern Fade', 'Textured Crop', 'Pompadour']) {
      expect(screen.getByText(style)).toBeInTheDocument()
    }
  })
})
