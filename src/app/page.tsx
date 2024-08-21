import { OwnerRepo } from "@/components/OwnerRepo/index";

interface DataProps {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  };
}

async function delayFetch(url: string, delay: number) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  const response = await fetch(url, { next:{ revalidate: 60 }});
  return response.json();
}

// async function getData() {
// https://api.github.com/users/oxtw/repos
// const response = await fetch("https://api.github.com/users/oxtw/repos");

// return response.json();
// }

async function getData() {
  const data = await delayFetch("https://api.github.com/users/oxtw/repos", 0);
  return data;
}

export default async function Home() {
  const data: DataProps[] = await getData();

  return (
    <div>
      <h1>Página Home</h1>
      <span> Bem vindo a pagina home</span>
      <br />

      <h3>Meus repositórios</h3>
      {data.map((item) => (
        <div key={item.id}>
          <strong>Repositório: </strong> <a>{item.name}</a>
          <br />
          <br />
          <OwnerRepo
            avatar_url={item.owner.avatar_url}
            name={item.owner.login}
          />
        </div>
      ))}
    </div>
  );
}
