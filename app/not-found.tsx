import Link from "next/link";

export default function NotFound() {
  return (
    <main className="hero">
      <div className="container hero-content">
        <p className="hero-greeting">Error 404</p>
        <h1 className="hero-title">Página no encontrada</h1>
        <p className="hero-subtitle">
          La ruta que buscas no existe o fue movida.
        </p>
        <div className="hero-actions">
          <Link href="/" className="btn btn-primary">
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
