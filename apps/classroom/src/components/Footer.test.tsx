import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders about section and links', () => {
    render(<Footer />)
    expect(screen.getByText('About Classroom')).toBeInTheDocument()
    expect(screen.getByText('Links')).toBeInTheDocument()
    expect(screen.getAllByText('Subscribe').length).toBeGreaterThanOrEqual(1)
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('submits subscribe form', async () => {
    render(<Footer />)
    const form = document.querySelector('form')!
    const submitSpy = vi.fn((e: Event) => e.preventDefault())
    form.addEventListener('submit', submitSpy)
    await userEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(submitSpy).toHaveBeenCalled()
  })
})
