import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ChooseUs } from './ChooseUs'

describe('ChooseUs', () => {
  it('renders the heading, checklist, and About Us button', () => {
    render(<ChooseUs />)
    expect(screen.getByRole('heading', { name: 'Why People Choose Us' })).toBeInTheDocument()
    expect(
      screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Integer et nisl et massa tempor ornare vel id orci.'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Nunc consectetur ligula vitae nisl placerat tempus.'),
    ).toBeInTheDocument()
    expect(screen.getByText('Curabitur quis ante vitae lacus varius pretium.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About Us' })).toHaveAttribute('href', '#contact')
  })

  it('renders the video play button', () => {
    render(<ChooseUs />)
    expect(screen.getByRole('link', { name: 'Play video' })).toHaveAttribute(
      'href',
      'https://www.youtube.com/',
    )
  })
})
