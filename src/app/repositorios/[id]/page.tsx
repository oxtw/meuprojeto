interface PageDetailProps {
  params: {
    id: string;
  };
}

async function getData(id: string) {
  // https://api.github.com/users/oxtw/repos
  const response = await fetch("https://api.github.com/users/oxtw/repos");
  return response.json();
}

export default async function RepositorioId({ params }: PageDetailProps) {
    const data = await getData(params.id);
    return (
    <div>
      <h1>Detalhes do Repositorio {params.id}</h1>
    </div>
  );
}
