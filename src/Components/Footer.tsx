export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="footer"
      className="w-full py-8 flex flex-col items-center justify-center border-t border-white/5"
    >
      <div className="neon-line mb-4" />
      <p className="text-white/40 text-sm tracking-widest uppercase">
        Powered by{' '}
        <span className="text-neon-red font-semibold neon-text-sm">
          HEVERT DAVID GD
        </span>
      </p>
      <p className="text-white/20 text-xs mt-2 tracking-wider">
        © {year} Jader Tremendo. Todos los derechos reservados.
      </p>
    </footer>
  )
}
