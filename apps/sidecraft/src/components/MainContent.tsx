export function MainContent() {
  return (
    <main className="flex-1 bg-page-bg p-8 lg:p-12">
      <h1 className="mb-6 text-3xl font-semibold text-heading-text">Sidebar #02</h1>

      <div className="space-y-4 text-body-text leading-relaxed">
        <p>
          This is a clean sidebar navigation template built with React and Tailwind CSS. The vibrant
          purple sidebar provides easy access to all sections of your site, while the main content
          area stays bright and readable. Perfect for portfolios, dashboards, and documentation
          sites.
        </p>

        <p>
          The sidebar includes a logo at the top, navigation links with support for dropdown
          submenus, and a newsletter subscription form. On mobile devices, the sidebar slides in
          from the left when toggled via the hamburger menu. The active page is highlighted for
          clear visual feedback.
        </p>

        <p>
          Built with React and Tailwind CSS, this template is fully responsive and ready to
          customize. Replace the placeholder content with your own and adjust the color scheme to
          match your brand. The sidebar navigation pattern works well for any site that needs
          persistent, always-accessible navigation.
        </p>
      </div>
    </main>
  )
}
