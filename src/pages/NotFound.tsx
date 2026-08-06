const NotFound = () => {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-6">
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-bold gradient-text">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">
          Página não encontrada
        </p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Voltar para o início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
