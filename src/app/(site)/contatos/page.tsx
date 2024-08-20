interface DataProps{
    id: number;
    name: string;
    full_name: string;
    owner:{
        login: string;
        id: number;
        avatar_url: string;
        url: string;
    }
}

async function getData() {
  // https://api.github.com/users/oxtw/repos
  const response = await fetch("https://api.github.com/users/oxtw/repos");

  return response.json();
}

export default async function contatos() {
  const data:DataProps[] = await getData();

  return (
    <div>
      <h1>Página de contatos</h1>
      <span> (012) 90123-4567</span>
      <br />

      <h3>Meus repositórios</h3>
      {data.map((item)=> (
        <div key={item.id}>
            <strong>Repositório: </strong> <a>{item.name}</a>
            <br /><br />
        </div>
      ))}
      
    </div>
  );
}
