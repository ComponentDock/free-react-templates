import { SolidButtons } from './components/SolidButtons'
import { OutlineButtons } from './components/OutlineButtons'
import { RoundedSolidButtons } from './components/RoundedSolidButtons'
import { RoundedOutlineButtons } from './components/RoundedOutlineButtons'
import { SocialBrandButtons } from './components/SocialBrandButtons'
import { DropdownButtons } from './components/DropdownButtons'
import { GroupButtons } from './components/GroupButtons'
import { Checkboxes } from './components/Checkboxes'
import { Radios } from './components/Radios'
import { SlideToggle } from './components/SlideToggle'
import { SocialIconButtons } from './components/SocialIconButtons'
import { ActionButtons } from './components/ActionButtons'
import { Footer } from './components/Footer'

function SectionHeading({ subtitle, id }: { subtitle: string; id?: string }) {
  return (
    <div id={id} className="mb-6 scroll-mt-20">
      <h2 className="text-2xl font-bold text-gray-900">{subtitle}</h2>
    </div>
  )
}

export function App() {
  return (
    <div className="min-h-screen bg-white font-[var(--font-poppins)]">
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Page heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Button #06</h2>
        </div>

        {/* Solid buttons */}
        <section id="solid" className="mb-12">
          <SectionHeading subtitle="Solid Buttons" />
          <SolidButtons />
        </section>

        {/* Outline buttons */}
        <section id="outline" className="mb-12">
          <SectionHeading subtitle="Outline Buttons" />
          <OutlineButtons />
        </section>

        {/* Rounded solid buttons */}
        <section id="rounded-solid" className="mb-12">
          <SectionHeading subtitle="Rounded Solid Buttons" />
          <RoundedSolidButtons />
        </section>

        {/* Rounded outline buttons */}
        <section id="rounded-outline" className="mb-12">
          <SectionHeading subtitle="Rounded Outline Buttons" />
          <RoundedOutlineButtons />
        </section>

        {/* Social brand buttons */}
        <section id="social-brand" className="mb-12">
          <SectionHeading subtitle="Social Brand Buttons" />
          <SocialBrandButtons />
        </section>

        {/* Dropdown buttons */}
        <section id="dropdowns" className="mb-12">
          <SectionHeading subtitle="Dropdown Buttons" />
          <DropdownButtons />
        </section>

        {/* Group buttons */}
        <section id="groups" className="mb-12">
          <SectionHeading subtitle="Group Buttons" />
          <GroupButtons />
        </section>

        {/* Checkboxes */}
        <section id="checkboxes" className="mb-12">
          <SectionHeading subtitle="Checkboxes" />
          <Checkboxes />
        </section>

        {/* Radio buttons */}
        <section id="radios" className="mb-12">
          <SectionHeading subtitle="Radios Buttons" />
          <Radios />
        </section>

        {/* Slide toggle */}
        <section id="slide" className="mb-12">
          <SectionHeading subtitle="Slide Button" />
          <SlideToggle />
        </section>

        {/* Social icon buttons */}
        <section id="social-icons" className="mb-12">
          <SectionHeading subtitle="Social Buttons" />
          <SocialIconButtons />
        </section>

        {/* Action buttons */}
        <section id="actions" className="mb-12">
          <SectionHeading subtitle="Action Buttons" />
          <ActionButtons />
        </section>
      </main>

      <Footer />
    </div>
  )
}
