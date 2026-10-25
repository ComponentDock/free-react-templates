import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ActionLink, Container, Eyebrow, Logo, PhonePill, RatingLine, Stars } from './ui'
import { PHONE_HREF, RATING_NOTE } from '../content'

describe('Container', () => {
  it('centres a 1280 px column with gutters', () => {
    render(<Container className="extra">Body</Container>)
    const element = screen.getByText('Body')
    expect(element.className).toContain('max-w-[1280px]')
    expect(element.className).toContain('extra')
  })
})

describe('Eyebrow', () => {
  it('renders the medium weight by default', () => {
    render(<Eyebrow>Service</Eyebrow>)
    expect(screen.getByText('Service').className).toContain('font-medium')
  })

  it('renders the bold weight on request', () => {
    render(<Eyebrow weight="bold">Products</Eyebrow>)
    expect(screen.getByText('Products').className).toContain('font-bold')
  })
})

describe('ActionLink', () => {
  it('renders the filled primary shape by default', () => {
    render(<ActionLink href="#quiz">Test</ActionLink>)
    const link = screen.getByRole('link', { name: 'Test' })
    expect(link).toHaveAttribute('href', '#quiz')
    expect(link.className).toContain('bg-primary-600')
    expect(link.className).toContain('rounded-lg')
  })

  it('renders the outline, white and on-green variants', () => {
    const { rerender } = render(
      <ActionLink href="#a" variant="outline">
        A
      </ActionLink>,
    )
    expect(screen.getByRole('link', { name: 'A' }).className).toContain('border-ink-200')

    rerender(
      <ActionLink href="#b" variant="white">
        B
      </ActionLink>,
    )
    expect(screen.getByRole('link', { name: 'B' }).className).toContain('bg-white')

    rerender(
      <ActionLink href="#c" variant="onGreen">
        C
      </ActionLink>,
    )
    expect(screen.getByRole('link', { name: 'C' }).className).toContain('border-white/40')
  })

  it('renders the three sizes', () => {
    const { rerender } = render(
      <ActionLink href="#a" size="sm">
        S
      </ActionLink>,
    )
    expect(screen.getByRole('link', { name: 'S' }).className).toContain('text-sm')

    rerender(
      <ActionLink href="#b" size="md">
        M
      </ActionLink>,
    )
    expect(screen.getByRole('link', { name: 'M' }).className).toContain('px-6')

    rerender(
      <ActionLink href="#c" size="lg">
        L
      </ActionLink>,
    )
    expect(screen.getByRole('link', { name: 'L' }).className).toContain('px-8')
  })
})

describe('PhonePill', () => {
  it('is a tel link carrying the number', () => {
    render(<PhonePill className="hidden" />)
    const link = screen.getByRole('link', { name: '(555) 010-0221' })
    expect(link).toHaveAttribute('href', PHONE_HREF)
    expect(link.className).toContain('hidden')
  })
})

describe('Logo', () => {
  it('renders the dark wordmark by default', () => {
    render(<Logo brand="Headwater" />)
    expect(screen.getByText('Headwater').className).toContain('text-ink-800')
  })

  it('renders the light wordmark for the footer', () => {
    render(<Logo brand="Headwater" tone="light" />)
    expect(screen.getByText('Headwater').className).toContain('text-white')
  })
})

describe('Stars', () => {
  it('renders five amber stars at the small size by default', () => {
    const { container } = render(<Stars label="Rated 4.9 out of 5" />)
    expect(screen.getByRole('img', { name: 'Rated 4.9 out of 5' })).toBeInTheDocument()
    const stars = container.querySelectorAll('svg')
    expect(stars).toHaveLength(5)
    expect(stars[0]!.getAttribute('class')).toContain('text-star')
    expect(stars[0]!.getAttribute('class')).toContain('h-4')
  })

  it('renders sage stars at the medium size inside a review card', () => {
    const { container } = render(<Stars label="Five out of five" tone="primary" size="md" />)
    const stars = container.querySelectorAll('svg')
    expect(stars[0]!.getAttribute('class')).toContain('text-primary-400')
    expect(stars[0]!.getAttribute('class')).toContain('h-5')
  })
})

describe('RatingLine', () => {
  it('pairs the stars with the figure and the sample-data caveat', () => {
    render(<RatingLine />)
    expect(screen.getByRole('img', { name: 'Rated 4.9 out of 5' })).toBeInTheDocument()
    expect(screen.getByText('4.9')).toBeInTheDocument()
    expect(screen.getByText(RATING_NOTE)).toBeInTheDocument()
  })
})
