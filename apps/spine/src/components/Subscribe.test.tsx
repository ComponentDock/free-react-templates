import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Subscribe } from './Subscribe'
import { subscribe } from '../data'

describe('Subscribe', () => {
  it('renders the newsletter band with heading, copy and the pill email form', () => {
    const { container } = render(<Subscribe />)

    expect(screen.getByRole('heading', { level: 3, name: subscribe.heading })).toBeInTheDocument()
    expect(screen.getByText(subscribe.copy)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(subscribe.placeholder)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: subscribe.buttonLabel })).toBeInTheDocument()

    const section = container.querySelector('section')!
    expect(section.querySelector('div[aria-hidden="true"]')).not.toBeNull()
  })

  it('prevents default when the form is submitted', () => {
    const { container } = render(<Subscribe />)

    const form = container.querySelector('form')!
    fireEvent.submit(form)
    expect(screen.getByPlaceholderText(subscribe.placeholder)).toBeInTheDocument()
  })
})
