function SiteLink({ href, currentPath, className = "", children }) {
  const activeClass = currentPath === href ? "is-active" : "";
  const classes = `${className} ${activeClass}`.trim();

  return (
    <a className={classes} href={`#${href}`}>
      {children}
    </a>
  );
}

export default SiteLink;
