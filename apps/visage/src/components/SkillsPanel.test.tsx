import { render, screen } from '@testing-library/react'
import { SkillsPanel, SkillBar } from './SkillsPanel'

describe('SkillsPanel', () => {
  it('renders the section heading', () => {
    render(<SkillsPanel />)
    expect(screen.getByText('Technical Skills')).toBeInTheDocument()
  })

  it('renders all skill bars', () => {
    render(<SkillsPanel />)
    expect(screen.getByText('Intuition')).toBeInTheDocument()
    expect(screen.getByText('Creativity')).toBeInTheDocument()
    expect(screen.getByText('Pure Luck')).toBeInTheDocument()
    expect(screen.getByText('Awesomeness')).toBeInTheDocument()
  })

  it('displays skill percentages', () => {
    render(<SkillsPanel />)
    expect(screen.getByText('75%')).toBeInTheDocument()
    expect(screen.getByText('83%')).toBeInTheDocument()
    expect(screen.getByText('25%')).toBeInTheDocument()
    expect(screen.getByText('95%')).toBeInTheDocument()
  })
})

describe('SkillBar', () => {
  it('renders the skill name and percentage', () => {
    render(<SkillBar name="Testing" percentage={50} description="A test skill" />)
    expect(screen.getByText('Testing')).toBeInTheDocument()
    expect(screen.getByText('50%')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<SkillBar name="Testing" percentage={50} description="A test skill" />)
    expect(screen.getByText('A test skill')).toBeInTheDocument()
  })

  it('sets the bar width via inline style', () => {
    const { container } = render(<SkillBar name="Testing" percentage={72} description="Desc" />)
    const bar = container.querySelector('[style*="width"]') as HTMLElement
    expect(bar).toBeInTheDocument()
    expect(bar.style.width).toBe('72%')
  })
})
