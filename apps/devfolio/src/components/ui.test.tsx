import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import {
  ActionButton,
  ActionLink,
  Container,
  Eyebrow,
  SectionTop,
  SkipLink,
  Tag,
} from './ui'

describe('Container', () => {
  it('caps the width at 1,232 px and merges extra classes', () => {
    render(<Container className="extra">content</Container>)
    const node = screen.getByText('content')
    expect(node).toHaveClass('max-w-[1232px]', 'extra')
  })
})

describe('Eyebrow', () => {
  it('defaults to the muted tone', () => {
    render(<Eyebrow>SELECTED WORK</Eyebrow>)
    expect(screen.getByText('SELECTED WORK')).toHaveClass('text-muted')
  })

  it('supports the hero and panel tones', () => {
    render(
      <>
        <Eyebrow tone="hero">HERO LABEL</Eyebrow>
        <Eyebrow tone="panel">PANEL LABEL</Eyebrow>
      </>,
    )
    expect(screen.getByText('HERO LABEL')).toHaveClass('text-[#b9c7d9]')
    expect(screen.getByText('PANEL LABEL')).toHaveClass('text-[#dbe7ff]')
  })
})

describe('ActionLink', () => {
  it('renders an ink anchor by default', () => {
    render(<ActionLink href="#work">Explore</ActionLink>)
    const link = screen.getByRole('link', { name: 'Explore' })
    expect(link).toHaveAttribute('href', '#work')
    expect(link).toHaveClass('bg-ink')
  })

  it('renders the lime and white variants', () => {
    render(
      <>
        <ActionLink href="#work" variant="lime">
          Lime
        </ActionLink>
        <ActionLink href="mailto:someone@example.com" variant="white">
          White
        </ActionLink>
        <ActionLink href="#contact" variant="outlineLight">
          Outline
        </ActionLink>
      </>,
    )
    expect(screen.getByRole('link', { name: 'Lime' })).toHaveClass('bg-lime')
    expect(screen.getByRole('link', { name: 'White' })).toHaveClass('bg-white')
    expect(screen.getByRole('link', { name: 'Outline' })).toHaveClass('border-[#6b7e98]')
  })
})

describe('ActionButton', () => {
  it('passes its own element to the handler', () => {
    const onClick = vi.fn()
    render(<ActionButton onClick={onClick}>Open</ActionButton>)
    const button = screen.getByRole('button', { name: 'Open' })
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalledWith(button)
  })
})

describe('Tag', () => {
  it('renders a mono list item with a hairline border', () => {
    render(
      <ul>
        <Tag>URL state</Tag>
      </ul>,
    )
    const tag = screen.getByText('URL state')
    expect(tag.tagName).toBe('LI')
    expect(tag).toHaveClass('rounded-[3px]', 'font-mono')
  })
})

describe('SectionTop', () => {
  it('renders the eyebrow, heading and lede', () => {
    render(<SectionTop eyebrow="EYEBROW" heading="A heading" lede="A short lede." />)
    expect(screen.getByText('EYEBROW')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('A heading')
    expect(screen.getByText('A short lede.')).toHaveClass('max-w-[330px]')
  })
})

describe('SkipLink', () => {
  it('targets the main landmark', () => {
    render(<SkipLink />)
    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main')
  })
})
