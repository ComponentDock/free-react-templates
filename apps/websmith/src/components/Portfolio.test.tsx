import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the eyebrow and heading', () => {
    render(<Portfolio />)
    expect(screen.getByText('Recent Works')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Portfolio/i })).toBeInTheDocument()
  })

  it('renders the first project by default', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: 'Project Title One' })).toBeInTheDocument()
    expect(screen.getByText(/comprehensive brand identity/i)).toBeInTheDocument()
    expect(screen.getByText('Role: Design, Illustration, Web')).toBeInTheDocument()
  })

  it('renders a quote with author attribution', () => {
    render(<Portfolio />)
    expect(screen.getByText(/Nice Looking Website Of Ours/i)).toBeInTheDocument()
    expect(screen.getByText(/John Doe/)).toBeInTheDocument()
  })

  it('renders the Visit website button', () => {
    render(<Portfolio />)
    expect(screen.getByRole('link', { name: /Visit website/i })).toBeInTheDocument()
  })

  it('cycles through projects with prev/next buttons', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: 'Project Title One' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next project' }))
    expect(screen.getByRole('heading', { name: 'Project Title Two' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next project' }))
    expect(screen.getByRole('heading', { name: 'Project Title Three' })).toBeInTheDocument()
  })

  it('wraps around from last to first slide', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Next project' }))
    await user.click(screen.getByRole('button', { name: 'Next project' }))
    await user.click(screen.getByRole('button', { name: 'Next project' }))
    expect(screen.getByRole('heading', { name: 'Project Title One' })).toBeInTheDocument()
  })

  it('cycles backward with the previous button', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Previous project' }))
    expect(screen.getByRole('heading', { name: 'Project Title Three' })).toBeInTheDocument()
  })

  it('renders project images', () => {
    render(<Portfolio />)
    expect(screen.getByRole('img', { name: /Screenshot of Project Title One/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('renders the section with correct id', () => {
    render(<Portfolio />)
    expect(document.getElementById('portfolio-section')).toBeInTheDocument()
  })
})
