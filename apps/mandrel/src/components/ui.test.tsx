import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ActionLink, BandHeading, Container, Eyebrow, FactTable, Logo, Pill } from './ui'
import { HERO_FACTS } from '../content'

describe('Container', () => {
  it('caps at 1,280 px with 16 / 32 px gutters', () => {
    render(
      <Container className="extra">
        <span>inside</span>
      </Container>,
    )
    const box = screen.getByText('inside').parentElement as HTMLElement
    expect(box.className).toContain('max-w-[1280px]')
    expect(box.className).toContain('px-4')
    expect(box.className).toContain('lg:px-8')
    expect(box.className).toContain('extra')
  })
})

describe('Eyebrow', () => {
  it('defaults to the steel-blue label', () => {
    render(<Eyebrow>Capabilities</Eyebrow>)
    expect(screen.getByText('Capabilities').className).toContain('text-primary-600')
    expect(screen.getByText('Capabilities').className).toContain('uppercase')
  })

  it('takes the deeper 700 ink for the process band', () => {
    render(<Eyebrow deep>How we work</Eyebrow>)
    expect(screen.getByText('How we work').className).toContain('text-primary-700')
  })
})

describe('ActionLink', () => {
  it('renders the filled steel CTA by default', () => {
    render(<ActionLink href="#contact">Request a quote</ActionLink>)
    const link = screen.getByRole('link', { name: 'Request a quote' })
    expect(link).toHaveAttribute('href', '#contact')
    expect(link.className).toContain('bg-primary-600')
    expect(link.className).toContain('rounded-lg')
  })

  it('renders the outline, white and steel-outline variants', () => {
    render(
      <>
        <ActionLink href="#a" variant="outline">
          outline
        </ActionLink>
        <ActionLink href="#b" variant="white" size="lg">
          white
        </ActionLink>
        <ActionLink href="#c" variant="onSteel" size="lg">
          onSteel
        </ActionLink>
        <ActionLink href="#d" size="header">
          header
        </ActionLink>
      </>,
    )
    expect(screen.getByRole('link', { name: 'outline' }).className).toContain('border-ink-300')
    expect(screen.getByRole('link', { name: 'white' }).className).toContain('bg-white')
    expect(screen.getByRole('link', { name: 'white' }).className).toContain('py-4')
    expect(screen.getByRole('link', { name: 'onSteel' }).className).toContain('border-white/40')
    expect(screen.getByRole('link', { name: 'header' }).className).toContain('text-sm')
  })
})

describe('Pill', () => {
  it('is a full-radius outlined link with its icon', () => {
    render(
      <Pill href="tel:+15550100205" icon={<span data-icon />}>
        (555) 010-0205
      </Pill>,
    )
    const link = screen.getByRole('link', { name: '(555) 010-0205' })
    expect(link.className).toContain('rounded-full')
    expect(link.querySelector('[data-icon]')).not.toBeNull()
  })
})

describe('Logo', () => {
  it('renders an original mark in the dark tone', () => {
    const { container } = render(<Logo brand="Mandrel" />)
    const svg = container.querySelector('svg') as SVGElement
    expect(svg.getAttribute('aria-hidden')).toBe('true')
    expect(container.querySelector('.stroke-primary-600')).not.toBeNull()
    expect(screen.getByText('Mandrel').className).toContain('text-ink-800')
  })

  it('lightens the same mark for the footer', () => {
    const { container } = render(<Logo brand="Mandrel" tone="light" />)
    expect(container.querySelector('.stroke-primary-300')).not.toBeNull()
    expect(screen.getByText('Mandrel').className).toContain('text-white')
  })
})

describe('FactTable', () => {
  it('lists each label and value on its own row', () => {
    render(<FactTable rows={HERO_FACTS} />)
    expect(screen.getByRole('table', { name: 'Prequalification facts' })).toBeInTheDocument()
    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(4)
    expect(screen.getByRole('rowheader', { name: 'Founded' })).toBeInTheDocument()
    expect(screen.getByText('$5M single, $12M aggregate')).toBeInTheDocument()
  })
})

describe('BandHeading', () => {
  it('renders eyebrow, heading and lede', () => {
    render(<BandHeading eyebrow="Projects" heading="Three recent jobs" lede="Each with the scope." />)
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Three recent jobs' })).toBeInTheDocument()
    expect(screen.getByText('Each with the scope.')).toBeInTheDocument()
  })

  it('drops the lede when there is none', () => {
    const { container } = render(<BandHeading eyebrow="Prequalification" heading="What is in the pack" />)
    expect(container.querySelector('p.text-lg')).toBeNull()
  })
})
