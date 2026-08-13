import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CallToAction } from './CallToAction'

describe('CallToAction', () => {
  it('renders the CTA band with heading, copy, links, phone, and email', () => {
    const { container } = render(<CallToAction />)

    expect(
      screen.getByRole('heading', { level: 2, name: /Let's Launch your Website Now/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Move your domain, your email, and your applications today/i),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Live Chat/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /get start now/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /\+10 783 467 3789/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /support@sitewise.example/ })).toBeInTheDocument()

    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/sitewise-launch/1920/800',
    )
  })
})
