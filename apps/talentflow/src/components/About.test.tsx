import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { About } from './About'

describe('About', () => {
  it('renders the Our Agency heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'Our Agency' })).toBeInTheDocument()
  })

  it('renders the Why Us heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'Why Us?' })).toBeInTheDocument()
  })

  it('renders all four accordion items', () => {
    render(<About />)
    expect(screen.getByText('Provident alias')).toBeInTheDocument()
    expect(screen.getByText('Debitis ad similique tempore')).toBeInTheDocument()
    expect(screen.getByText('Lorem ipsum dolor sit amet')).toBeInTheDocument()
    expect(screen.getByText('Modi natus suscipit')).toBeInTheDocument()
  })

  it('shows first accordion content by default', () => {
    render(<About />)
    expect(
      screen.getByText(
        /Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quos incidunt/,
      ),
    ).toBeInTheDocument()
  })

  it('toggles accordion on click', async () => {
    const user = userEvent.setup()
    render(<About />)
    await user.click(screen.getByText('Debitis ad similique tempore'))
    expect(screen.getByText(/Repellat voluptate animi/)).toBeInTheDocument()
  })

  it('collapses accordion on second click', async () => {
    const user = userEvent.setup()
    render(<About />)
    await user.click(screen.getByText('Provident alias'))
    // First item's content should be hidden after toggling off
    expect(
      screen.queryByText(
        /Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quos incidunt/,
      ),
    ).not.toBeInTheDocument()
  })

  it('renders carousel image', () => {
    render(<About />)
    const img = screen.getByAltText('Office collaboration')
    expect(img).toBeInTheDocument()
  })

  it('has about section id', () => {
    render(<About />)
    expect(document.getElementById('about')).toBeInTheDocument()
  })

  it('switches carousel image on dot click', async () => {
    const user = userEvent.setup()
    render(<About />)
    const dot = screen.getByRole('button', { name: 'Show image 2' })
    await user.click(dot)
    expect(screen.getByAltText('Team meeting')).toBeInTheDocument()
  })
})
