import { footer, siteConfig } from "@/lib/content";
import { CTAButton, Container, Wordmark } from "@/components/primitives";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-bg pb-24 pt-16 md:pb-16">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Wordmark className="text-xl" />
            <p className="mt-4 text-ink-soft">{footer.tagline}</p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <div>
              <p className="text-sm text-muted">{footer.contactLabel}</p>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-[1.05rem] font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
              >
                {siteConfig.contactEmail}
              </a>
            </div>
            <CTAButton>{footer.cta}</CTAButton>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; {year} {siteConfig.brand}. All rights reserved.
          </span>
          <span>Double your revenue in 60 days or you don&apos;t pay.</span>
        </div>
      </Container>
    </footer>
  );
}
