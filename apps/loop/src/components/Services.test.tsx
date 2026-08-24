import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Services } from './Services'

describe('Services', () => {
  it('renders services heading and initial service', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('What We Offer')
    expect(screen.getByText('Web Design')).toBeInTheDocument()
  })

  it('navigates to next service on arrow click', async () => {
    const user = userEvent.setup()
    render(<Services />)
    const nextBtn = screen.getByRole('button', { name: 'Next service' })
    await user.click(nextBtn)
    expect(screen.getByText('Graphic Design')).toBeInTheDocument()
  })

  it('navigates to previous service on arrow click', async () => {
    const user = userEvent.setup()
    render(<Services />)
    const prevBtn = screen.getByRole('button', { name: 'Previous service' })
    await user.click(prevBtn)
    expect(screen.getByText('Brand Identity')).toBeInTheDocument()
  })

  it('jumps to a service via dot indicator', async () => {
    const user = userEvent.setup()
    render(<Services />)
    const dot = screen.getByRole('button', { name: 'Go to service 3' })
    await user.click(dot)
    expect(screen.getByText('Web/Mobile Application')).toBeInTheDocument()
  })
})
