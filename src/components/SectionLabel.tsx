type SectionLabelProps = {
  children: string;
  dark?: boolean;
};

export function SectionLabel({ children, dark = false }: SectionLabelProps) {
  return (
    <p className={`section-label${dark ? " section-label--dark" : ""}`}>
      <span className="section-label__line" aria-hidden="true" />
      {children}
      <span className="section-label__line" aria-hidden="true" />
    </p>
  );
}
